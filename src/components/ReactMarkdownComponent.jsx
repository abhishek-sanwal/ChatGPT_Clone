import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

function ReactMarkdownComponent({ text }) {
  return (
    <section>
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
    </section>
  );
}

export default ReactMarkdownComponent;
