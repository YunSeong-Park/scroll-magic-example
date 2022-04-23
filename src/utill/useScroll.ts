import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(window.pageYOffset);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
  };
}
