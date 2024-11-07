import { useEffect, useState } from "react";

function useLocalStorage({ key, initialState }) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      console.log(key, JSON.stringify(value));
      localStorage.setItem(key, JSON.stringify(value));
    },
    [(key, value)]
  );

  return [value, setValue];
}

export default useLocalStorage;
