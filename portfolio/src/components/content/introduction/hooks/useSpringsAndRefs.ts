import { useSpring } from "@react-spring/web";

const useSpringsAndRefs = () => {
  const nameSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
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
      y: 0,
      opacity: 1,
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
      y: 0,
      opacity: 1,
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
      y: 0,
      opacity: 1,
    },
    config: { duration: 2000 },
    delay: 2200,
  });

  return {
    nameSpring,
    subTitleSpring,
    descSpring,
    buttonSpring,
  };
};

export default useSpringsAndRefs;
