import { ReactElement } from 'react';
import { Drink } from '../types/drinks';
export const DrinksList = ({ drinks }: { drinks: Drink[] }): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {drinks?.map((drink: Drink) => (
        <div key={drink.idDrink}>
          <h1>{drink.strDrink}</h1>
        </div>
      ))}
    </div>
  );
};
