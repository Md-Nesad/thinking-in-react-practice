import React, { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceTime, setDebounceTime] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceTime(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceTime; //created custom hook for debounce logic
}
