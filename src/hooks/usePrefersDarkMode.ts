import { useMedia } from '@/hooks/useMedia';

export function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: light)'], [false], true);
}
