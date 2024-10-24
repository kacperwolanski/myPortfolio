import { useState } from "react";

const useThrottled = <T extends (...args: any[]) => void>(
  callbackFunc: T,
  delay: number
) => {
  const [isThrottled, setIsThrottled] = useState(false);
  return function (...args: Parameters<T>) {
    if (!isThrottled) {
      callbackFunc(...args);
      setIsThrottled(true);

      setTimeout(() => {
        setIsThrottled(false);
      }, delay);
    }
  };
};

export default useThrottled;
