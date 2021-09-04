import { useEffect } from 'react';

export function useUnmount(fn) {
  useEffect(() => fn, []);
}
