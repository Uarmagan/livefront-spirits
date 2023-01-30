import { ReactElement } from 'react';
import { Drink } from '../types/drinks';
import { DrinkItem } from './drinkItem';

export const DrinksList = ({
  drinks,
  setSelectedDrink,
  isLoading,
  isError,
}: {
  drinks: Drink[];
  setSelectedDrink: (drink: Drink | null) => void;
  isLoading: boolean;
  isError: boolean;
}): ReactElement => {
  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <div>We are facing technical difficulties. Please try again.</div>;

  if (drinks?.length === 0)
    return (
      <div className=" text-gray-500">
        Welcome to Spirits DB. Type something in the search field and press enter.
      </div>
    );

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 h-12">
        {drinks?.map((drink: Drink) => (
          <DrinkItem
            key={drink.idDrink}
            drink={drink}
            setSelectedDrink={setSelectedDrink}
          />
        ))}
      </ul>
    </>
  );
};
