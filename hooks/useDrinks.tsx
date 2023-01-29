import { useQuery } from '@tanstack/react-query';

const baseUrl = 'https://thecocktaildb.com/api/json/v1/1';

export const useDrinks = (filter: string): any => {
  return useQuery({
    queryKey: ['search', filter],
    queryFn: async () => {
      return fetch(`${baseUrl}/search.php?s=${filter}`).then((res) => res.json());
    },
    keepPreviousData: true,
    enabled: filter.length > 2,
    refetchOnWindowFocus: false,
    initialData: [],
  });
};
