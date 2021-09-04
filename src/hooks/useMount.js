import { useEffect } from 'react';

export function useMount(fn) {
  useEffect(() => {
    fn();
  }, []);
}
