import { useSprings } from "@react-spring/web";
import { useState } from "react";

const useWavedLetters = (splitText: string[]) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springs = useSprings(
    splitText.length,
    splitText.map((_, i) => ({
      transform: hoveredIndex === i ? "translateY(-10px)" : "translateY(0px)",
      config: { tension: 500, friction: 10 },
    }))
  );

  return { springs, setHoveredIndex };
};

export default useWavedLetters;
