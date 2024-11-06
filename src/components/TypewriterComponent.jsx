import { Cursor, useTypewriter } from "react-simple-typewriter";

function TypewriterComponent({ data }) {
  console.log(data);
  const [text] = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    typeSpeed: 30,
    delaySpeed: 160,
  });

  return (
    <md-block>
      {text}
      <Cursor cursorColor="red" />
    </md-block>
  );
}

export default TypewriterComponent;
