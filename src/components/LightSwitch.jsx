import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export function LightSwitch() {
  // Naredi state `isDark`

  // Uporabi useEffect za dodajanje ali odstranjevanje classa `dark` na `document.documentElement` glede na vrednost `isDark`

  // Prikazi Switch komponento in ji posreduj `isDark` in `setIsDark` kot props

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  }, [isDark]);

  return <Switch checked={isDark} onCheckedChange={setIsDark}></Switch>;
}
