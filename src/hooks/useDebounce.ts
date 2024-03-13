import React from "react";

export const useDebounce = (searchRequest: string, delay: number) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const handler = setTimeout(() => setValue(searchRequest), delay);
    return () => clearTimeout(handler);
  }, [delay, searchRequest]);

  return value;
};
