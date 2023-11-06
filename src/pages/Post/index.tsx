import { useAPI } from "@/hooks/useAPI";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  Github,
  MessageCircle,
} from "lucide-react";
import Markdown from "react-markdown";
import { NavLink, useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Post } from "../Home";
import { Code } from "./components/Code";
import { Image } from "./components/Image";

export function PostPage() {
  const { id } = useParams();
  const { data: post } = useAPI<Post>(
    `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
  );

  return (
    <main className="w-full max-w-4xl px-4 mx-auto">
      {post && (
        <>
          <div className="p-8 -mt-16 space-y-4 rounded-xl bg-base-profile">
            <header className="flex items-center justify-between w-full text-blue">
              <NavLink to="/" className="flex items-center gap-">
                <ChevronLeft size={16} />
                Voltar
              </NavLink>
              <a href={post.html_url} className="flex items-center gap-2">
                Ver no GitHub
                <ArrowUpRight size={16} />
              </a>
            </header>

            <h1 className="text-2xl font-bold text-base-title">{post.title}</h1>

            <div className="flex items-center gap-8 text-base-span">
              <div className="flex items-center gap-2">
                <Github size={16} />
                <span>{post.user.login}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                <span>
                  {formatDistanceToNowStrict(new Date(post.created_at), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>

          <div className="w-full p-8 prose text-base-text max-w-none prose-a:text-blue prose-headings:text-base-title prose-pre:p-0 prose-pre:border prose-pre:border-base-border">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: Image,
                code: Code,
              }}
            >
              {post.body}
            </Markdown>
          </div>
        </>
      )}
    </main>
  );
}
