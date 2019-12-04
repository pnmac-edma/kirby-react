import { useLocation } from 'react-router-dom';

// Custom hook for query string parsing from URL
// Useful for things like Search, which normally can't depend
// only on a text input (i.e. someone might want a shareable URL)
// `param` is the key of the query parameter whose value we want
export const useQuery = param => {
  const queryParams = useLocation().search;
  return new URLSearchParams(queryParams).get(param);
};
