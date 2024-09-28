import { useEffect } from "react";

const useScrollRestoration = () => {
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollPosition");
    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      sessionStorage.removeItem("scrollPosition");
    };
  }, []);
};

export default useScrollRestoration;
