import { Cursor, useTypewriter } from "react-simple-typewriter";

import React from "react";

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="App">
      <span>{text}</span>
      <Cursor cursorColor="red" />
    </div>
  );
};

export default MyComponent;
