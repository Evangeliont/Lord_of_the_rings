import { useState, useEffect } from "react";

export const useDebounce = (searchRequest: string, delay: number) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setValue(searchRequest), delay);
    return () => clearTimeout(handler);
  }, [delay, searchRequest]);

  return value;
};
