import { useSpring } from "@react-spring/web";
import { useRef } from "react";
import useIntersectionObserver from "shared/hooks/useIntrsectionObserver";

const useSpringsAndRefs = () => {
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const { isVisible: isNameVisible } = useIntersectionObserver(nameRef);
  const { isVisible: isSubtitleVisible } = useIntersectionObserver(subtitleRef);
  const { isVisible: isDescriptionVisible } =
    useIntersectionObserver(descriptionRef);
  const { isVisible: isButtonVisible } = useIntersectionObserver(buttonRef);

  const nameSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isNameVisible ? 1 : 0,
    },
    config: { duration: 1200 },
    delay: 500,
  });

  const subTitleSpring = useSpring({
    from: {
      y: 50,
      opacity: 0,
    },
    to: {
      y: isNameVisible ? 0 : 50,
      opacity: isNameVisible ? 1 : 0,
    },
    config: { duration: 1000 },
    delay: 1200,
  });

  const descSpring = useSpring({
    from: {
      y: 50,
      opacity: 0,
    },
    to: {
      y: isNameVisible ? 0 : 50,
      opacity: isNameVisible ? 1 : 0,
    },
    config: { duration: 1000 },

    delay: 1500,
  });

  const buttonSpring = useSpring({
    from: {
      y: 100,
      opacity: 0,
    },
    to: {
      y: isNameVisible ? 0 : 100,
      opacity: isNameVisible ? 1 : 0,
    },
    config: { duration: 2000 },
    delay: 2200,
  });

  return {
    nameSpring,
    subTitleSpring,
    descSpring,
    buttonSpring,
    nameRef,
    subtitleRef,
    descriptionRef,
    buttonRef,
  };
};

export default useSpringsAndRefs;
