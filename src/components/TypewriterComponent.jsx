import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTypewriter } from "react-simple-typewriter";

function TypewriterComponent({ data }) {
  const [text] = useTypewriter({
    words: [data],
    typeSpeed: 10,
  });

  return (
    <div>
      {/* Render Markdown with syntax highlighting */}
      <ReactMarkdown
        children={text}
        components={{
          code({ node, inline, className, children, ...props }) {
            // If the code block is inline
            if (inline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            // If it's a block code
            const language = className?.replace("language-", "");
            return (
              <SyntaxHighlighter
                style={nightOwl}
                language={language}
                children={String(children).replace(/\n$/, "")}
                {...props}
              />
            );
          },
        }}
      />
    </div>
  );
}

export default TypewriterComponent;
