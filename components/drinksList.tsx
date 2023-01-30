import { ReactElement, useState } from 'react';
import { Drink } from '../types/drinks';
import { DrinkItem } from './drinkItem';
import { DrinkSelection } from './drinkSelection';
export const DrinksList = ({
  drinks,
  isLoading,
}: {
  drinks: Drink[];
  isLoading: boolean;
}): ReactElement => {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid lg:grid-cols-[3fr_1fr] gap-x-3 h-screen">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 h-12">
        {drinks?.map((drink: Drink) => (
          <DrinkItem
            key={drink.idDrink}
            drink={drink}
            setSelectedDrink={setSelectedDrink}
          />
        ))}
      </ul>
      <DrinkSelection selectedDrink={selectedDrink} />
    </div>
  );
};
