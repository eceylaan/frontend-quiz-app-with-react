import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // Yerel depolamadaki veriyi almak için
    const item = window.localStorage.getItem(key);
    // Eğer değer varsa, JSON.parse ile çözümler
    // Eğer değer yoksa, initialValue'yu döndürür
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    // set edilen deger
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
    // locale kaydetme
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
