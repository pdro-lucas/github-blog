import { Post } from "@/pages/Home";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import Markdown from "react-markdown";
import { NavLink } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <NavLink to={`/post/${post.number}`} className="flex-1">
      <div className="p-8 bg-base-post rounded-xl w-[416px] space-y-5 h-64 hover:brightness-125 transition-all">
        <div className="flex items-baseline justify-between gap-6">
          <span className="text-xl font-bold text-base-title line-clamp-2">
            {post.title}
          </span>
          <span className="text-xs capitalize whitespace-nowrap text-base-span">
            {formatDistanceToNowStrict(new Date(post.created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </div>
        <Markdown
          disallowedElements={["a"]}
          className="prose line-clamp-4 prose-md text-base-text prose-headings:text-base-title"
        >
          {post.body || "# Sem conteúdo"}
        </Markdown>
      </div>
    </NavLink>
  );
}
