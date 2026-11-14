/** @format */

import { memo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsClipboard2, BsClipboard2CheckFill } from "react-icons/bs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = { filename?: string; code: string; language?: string; className?: string; showLineNumbers?: boolean };

export const CodeBlock = memo(({ filename, code, language = "typescript", className, showLineNumbers = true }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={twMerge(
        "relative flex w-full shrink-0 flex-col overflow-hidden rounded-xl border border-black/20 bg-black/1 shadow-md backdrop-blur-md",
        className,
      )}
    >
      {filename ? (
        <div className="flex items-center justify-between border-b border-black/20 bg-black/5 p-3 text-xs font-medium opacity-80">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-yellow-400" />
            <span className="size-2.5 rounded-full bg-green-400" />
            <span className="ml-2 text-xs opacity-80">{filename}</span>
          </div>

          <button
            onClick={copy}
            children={copied ? ["Copied", <BsClipboard2CheckFill />] : <BsClipboard2 />}
            className="flex cursor-pointer items-center gap-1.5 text-xs opacity-60"
          />
        </div>
      ) : (
        <button
          onClick={copy}
          children={copied ? ["Copied", <BsClipboard2CheckFill />] : <BsClipboard2 />}
          className="absolute top-3 right-3 z-5 flex cursor-pointer items-center gap-1.5 text-xs opacity-60"
        />
      )}
      <div id="code" className="scrollbar-none overflow-x-auto invert">
        <SyntaxHighlighter
          style={theme}
          children={code.trim()}
          language={language}
          showLineNumbers={showLineNumbers}
          codeTagProps={{ style: { fontFamily: "var(--font-mono), monospace" } }}
          customStyle={{
            margin: 0,
            border: 0,
            fontSize: "13px",
            padding: "1.5rem",
            lineHeight: "1.8",
            minWidth: "max-content",
            background: "transparent",
          }}
        />
      </div>
    </div>
  );
});

export const InlineCode = ({ code, className }: { code: string; className?: string }) => (
  <span id="code" className={twMerge("invert", className)}>
    <SyntaxHighlighter
      language="ts"
      PreTag="span"
      CodeTag="span"
      children={code}
      style={theme}
      customStyle={{ margin: 0, border: 0, fontSize: "13px", padding: 0, background: "transparent" }}
    />
  </span>
);
