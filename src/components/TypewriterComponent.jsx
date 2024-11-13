import React, { useEffect, useRef } from "react";

import ReactMarkdownComponent from "./ReactMarkdownComponent";
import { useTypewriter } from "react-simple-typewriter";

function TypewriterComponent({ data, speed }) {
  const typeWriterRef = useRef();
  const [text] = useTypewriter({
    words: [data],
    typeSpeed: speed,
  });

  // Automatically Scroll Content
  // useEffect(
  //   function () {
  //     typeWriterRef.current?.scrollIntoView({
  //       block: "end",
  //       behavior: "smooth",
  //     });
  //   },
  //   [text]
  // );
  return (
    <div ref={typeWriterRef}>
      {/* Render Markdown with syntax highlighting */}
      <ReactMarkdownComponent text={text} />
    </div>
  );
}

export default TypewriterComponent;
