import { PostCard } from "@/components/PostCard";
import { ProfileCard } from "@/components/ProfileCard";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

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

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await api.get<Post[]>(
          "/repos/pdro-lucas/github-blog/issues"
        );

        setPosts(response.data);
      } catch (error) {
        console.error("Failed to load posts", error);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className="w-full max-w-4xl px-4 mx-auto">
      <ProfileCard />

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
          />
        </div>

        {posts.map((post) => (
          <PostCard key={post.number} post={post} />
        ))}
      </div>
    </main>
  );
}
