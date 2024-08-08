import { useEffect, useState } from "react";

const useIsTopMenuHidden = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { isHidden };
};

export default useIsTopMenuHidden;
