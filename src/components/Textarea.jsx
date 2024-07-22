import { useState } from "react";
import Warning from "../UI/Warrning";
function Textarea({ textareaValue, setTextareaValue }) {
  const [showWarning, setShowWarning] = useState(false);

  function handleChange(e) {
    setShowWarning(false);
    if (e.target.value.includes("<script")) {
      setShowWarning(true);
      return setTextareaValue("");
    }
    setTextareaValue(e.target.value);
  }

  return (
    <>
      <textarea
        placeholder="Введите текст"
        spellCheck="false"
        onChange={handleChange}
        value={textareaValue}
        className="textarea"
      ></textarea>
      {showWarning && <Warning />}
    </>
  );
}

export default Textarea;
