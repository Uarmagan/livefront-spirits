import Image from 'next/image';
import { Drink } from '../types/drinks';
import { ReactElement } from 'react';

export const DrinkItem = ({
  drink,
  setSelectedDrink,
}: {
  drink: Drink;
  setSelectedDrink: (drink: Drink) => void;
}): ReactElement => (
  <li className="col-span-1 flex flex-col bg-white text-center shadow rounded-lg">
    <div className="flex flex-col justify-between">
      <div className="aspect-square relative w-full">
        <Image
          src={drink.strDrinkThumb as string}
          alt={drink.strDrink}
          fill
          className=" rounded-t-lg"
        />
      </div>
      <div className="p-3">
        <h1 className="tracking-widest md:tracking-wider text-xl md:text-md">
          {drink.strDrink}
        </h1>
        <button
          className="mt-2 cursor-pointer text-blue-700 text-lg md:text-sm"
          onClick={() => setSelectedDrink(drink)}
        >
          See The Recipe
        </button>
      </div>
    </div>
  </li>
);
