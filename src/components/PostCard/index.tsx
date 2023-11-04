import { Post } from "@/pages/Home";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="p-8 bg-base-post rounded-xl w-[416px] space-y-5">
        <div className="flex items-baseline justify-between gap-6">
          <span className="text-xl font-bold text-base-title">
            {post.title}
          </span>
          <span className="text-xs whitespace-nowrap text-base-span">
            {formatDistanceToNow(new Date(post.created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </div>
        <Markdown className="line-clamp-4">{post.body}</Markdown>
      </div>
    </div>
  );
}