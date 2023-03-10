import axios from 'axios';
import { Drink, DrinksListSchema } from '../types/drinks';

const baseUrl = 'https://thecocktaildb.com/api/json/v1/1';

export const fetchDrinks = async (filter: string): Promise<Drink[]> => {
  const data = await axios.get(`${baseUrl}/search.php?s=${filter}`);
  return DrinksListSchema.parse(data.data.drinks);
};
