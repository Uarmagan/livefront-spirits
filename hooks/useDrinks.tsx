import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Drink, DrinksListSchema } from '../types/drinks';

const baseUrl = 'https://thecocktaildb.com/api/json/v1/1';

const fetchDrinks = async (): Promise<Drink[]> => {
  const data = await axios.get(`${baseUrl}/search.php?s=${filter}`);
  return DrinksListSchema.parse(data.data.drinks);
};

export const useDrinks = (filter: string) => {
  return useQuery({
    queryKey: ['search', filter],
    queryFn: fetchDrinks,
    keepPreviousData: true,
    enabled: filter.length > 2,
    refetchOnWindowFocus: false,
    initialData: [],
  });
};
