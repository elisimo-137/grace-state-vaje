import { useEffect, useState } from "react";
import { Textarea } from "./ui/textarea";
import { Slider } from "./ui/slider";

export function TextLengthCounter() {
  const [text, setText] = useState("");
  const [maxChars, setMaxChars] = useState(100);
  const [isOverLimit, setIsOverLimit] = useState(false);

  useEffect(() => {
    if (text.length > maxChars) {
      console.log("TOO MUCH TEXT!");
      setIsOverLimit(true);
    }
  }, [text, maxChars]);

  return (
    <div>
      <Textarea
        value={text}
        onChange={(t) => setText(t.target.value)}
      ></Textarea>
      <Slider
        value={[maxChars]}
        onValueChange={(new_value) => setMaxChars(new_value[0])}
      ></Slider>
      {isOverLimit ? "prevec znakov" : "dovolj znakov"}
    </div>
  );
}
