import React, { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDebouneValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouneValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceValue;
}
