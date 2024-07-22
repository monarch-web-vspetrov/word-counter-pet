import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

function Container() {
  const [textareaValue, setTextareaValue] = useState("");
  const charactersCount = textareaValue.length;
  const wordsCount = textareaValue.split(" ").length - 1;

  return (
    <main className="container">
      <Textarea
        textareaValue={textareaValue}
        setTextareaValue={setTextareaValue}
      ></Textarea>
      <Stats charactersCount={charactersCount} wordsCount={wordsCount}></Stats>
    </main>
  );
}

export default Container;
