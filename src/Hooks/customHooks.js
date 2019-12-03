import { useLocation } from 'react-router-dom';

// Custom hook for query string parsing from URL
// Useful for things like Search, which normally can't depend
// only on a text input (i.e. someone might want a shareable URL)
export const useQuery = (urlPath, param) => {
  // `urlPath` is the path string that comes after "{BASE_URL}/"
  // `param` is the key of the query parameter whose value we want
  const path = useLocation()[urlPath];
  return new URLSearchParams(path).get(param);
};
