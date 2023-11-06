import { Loading } from "@/components/Loading";
import { PostCard } from "@/components/PostCard";
import { ProfileCard } from "@/components/ProfileCard";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface Post {
  title: string;
  html_url: string;
  number: number;
  body: string;
  created_at: string;
  user: User;
}

interface PostList {
  total_count: number;
  items: Post[];
}

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [parent] = useAutoAnimate();

  const REPONAME = "rocketseat-education/reactjs-github-blog-challenge";

  const {
    data: posts,
    isLoading,
    fetchData,
  } = useAPI<PostList>(`/search/issues?q=repo:${REPONAME}`);

  useEffect(() => {
    const refetchPost = setTimeout(() => {
      const query = inputValue;
      const url = `/search/issues?q=${query} repo:${REPONAME}`;

      fetchData(url);
    }, 2000);

    return () => clearTimeout(refetchPost);
  }, [inputValue, fetchData]);

  return (
    <main className="w-full max-w-4xl px-4 mx-auto" ref={parent}>
      <ProfileCard />

      <div className="flex flex-wrap items-center justify-between gap-2 mt-16">
        <span className="text-lg font-bold text-base-subtitle">
          Publicações
        </span>
        <span className="text-sm text-base-span">
          {posts?.total_count} publicações
        </span>
        <input
          type="text"
          className="w-full px-4 py-3 border rounded-md outline-none bg-base-input border-base-border placeholder:text-base-border"
          placeholder="Buscar conteúdo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {isLoading && <Loading />}

      {posts && (
        <div className="mt-12 space-y-12">
          <div className="flex flex-wrap gap-6">
            {posts.items.map((post) => (
              <PostCard key={post.number} post={post} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
