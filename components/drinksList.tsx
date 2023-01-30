import { ReactElement } from 'react';
import { Drink } from '../types/drinks';
import { DrinkItem } from './drinkItem';

export const DrinksList = ({
  drinks,
  setSelectedDrink,
}: {
  drinks: Drink[];
  setSelectedDrink: (drink: Drink | null) => void;
}): ReactElement => {
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
