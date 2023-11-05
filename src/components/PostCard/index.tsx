import { Posts } from "@/pages/Home";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";

interface PostCardProps {
  post: Posts;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="p-8 bg-base-post rounded-xl w-[416px] space-y-5">
      <div className="flex items-baseline justify-between gap-6">
        <span className="text-xl font-bold text-base-title">{post.title}</span>
        <span className="text-xs capitalize whitespace-nowrap text-base-span">
          {formatDistanceToNowStrict(new Date(post.created_at), {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </div>
      <Markdown className="line-clamp-4">{post.body}</Markdown>
    </div>
  );
}
