import { useSearchParams } from "react-router-dom";

export const useQueryURL = () => {
  const [search, setSearch] = useSearchParams();
  return [Object.fromEntries([...search]), setSearch];
};

export default useQueryURL;
