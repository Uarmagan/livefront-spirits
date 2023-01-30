import { useQuery } from '@tanstack/react-query';
import { fetchDrinks } from '../http/cocktailDb';

export const useDrinks = (filter: string) => {
  return useQuery({
    queryKey: ['search', filter],
    queryFn: () => fetchDrinks(filter),
    keepPreviousData: true,
    enabled: filter.length > 2,
    refetchOnWindowFocus: false,
    initialData: [],
  });
};
