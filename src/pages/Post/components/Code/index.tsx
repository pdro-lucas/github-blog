import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Code({ className, children }: CodeProps) {
  const match = /language-(\w+)/.exec(className || "");

  return (
    <SyntaxHighlighter
      language={match ? match[1] : ""}
      style={nightOwl}
      children={String(children).replace(/\n$/, "")}
      PreTag="div"
    />
  );
}
