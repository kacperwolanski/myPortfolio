import { useSpring } from "@react-spring/web";

const useSpringsAndRefs = () => {
  const firstNameSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
    config: { duration: 2500 },
    delay: 500,
  });
  const surnameSpring = useSpring({
    from: {
      opacity: 0,
      zIndex: 10,
    },
    to: {
      y: 0,
      opacity: 1,
      zIndex: 10,
    },
    config: { duration: 2500 },
    delay: 1000,
  });

  const subTitleSpring = useSpring({
    from: {
      y: 50,
      opacity: 0,
      zIndex: 10,
    },
    to: {
      y: 0,
      opacity: 1,
      zIndex: 10,
    },
    config: { duration: 1000 },
    delay: 1200,
  });

  const descSpring = useSpring({
    from: {
      y: 50,
      opacity: 0,
      zIndex: 10,
    },
    to: {
      y: 0,
      opacity: 1,
      zIndex: 10,
    },
    config: { duration: 1000 },

    delay: 1500,
  });

  const buttonSpring = useSpring({
    from: {
      y: 100,
      opacity: 0,
      zIndex: 10,
    },
    to: {
      y: 0,
      opacity: 1,
      zIndex: 10,
    },
    config: { duration: 2000 },
    delay: 2200,
  });

  return {
    firstNameSpring,
    surnameSpring,
    subTitleSpring,
    descSpring,
    buttonSpring,
  };
};

export default useSpringsAndRefs;
