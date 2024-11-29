import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useFetchData(url) {
  const fetchData = async () => {
    const { data } = await axios.get(url,{
      withCredentials : true
    });
    return data;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['data', url],
    queryFn: fetchData,
  });

  return { isLoading, isError, data, error };
}




