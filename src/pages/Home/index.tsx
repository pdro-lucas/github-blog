import { PostCard } from "@/components/PostCard";
import { ProfileCard } from "@/components/ProfileCard";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Posts {
  title: string;
  html_url: string;
  number: number;
  body: string;
  created_at: string;
  user: User;
}

export function Home() {
  const [inputValue, setInputValue] = useState("");

  const {
    data: posts,
    isLoading,
    fetchData,
  } = useAPI<Posts[]>(
    "/repos/rocketseat-education/reactjs-github-blog-challenge/issues"
  );

  useEffect(() => {
    const refetchPost = setTimeout(() => {
      const query = inputValue;
      const url = `/search/issues?q=${query} repo:rocketseat-education/reactjs-github-blog-challenge`;

      fetchData(url);
    }, 2000);

    return () => clearTimeout(refetchPost);
  }, [inputValue, fetchData]);

  return (
    <main className="w-full max-w-4xl px-4 mx-auto">
      <ProfileCard />

      {isLoading && <p>Carregando...</p>}

      {posts && (
        <div className="mt-16 space-y-12">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-lg font-bold text-base-subtitle">
              Publicações
            </span>
            <span className="text-sm text-base-span">
              {posts.length} Publicaç{posts.length > 1 ? "ões" : "ão"}
            </span>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-md outline-none bg-base-input border-base-border placeholder:text-base-border"
              placeholder="Buscar conteúdo"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-6">
            {posts.map((post) => (
              <PostCard key={post.number} post={post} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
