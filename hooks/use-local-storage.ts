/**
 * Credits: https://usehooks.com/useLocalStorage/
 */
import { useState } from 'react';

export function useLocalStorage(key: string, initialValue: any) {
  // Since this app is statically build, there is no way that LocalStorage
  // won't be present. Thus the following snippet is only, get away with
  // NextJS SSR Builds.
  const _localStorage = process.browser
    ? localStorage
    : {
        getItem: (key: string) => {
          return JSON.stringify(!!key);
        },
        setItem: () => {
          console.error('Not Implemented');
        },
      };
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = _localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      _localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
