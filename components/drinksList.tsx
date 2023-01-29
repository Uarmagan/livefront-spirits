import { ReactElement } from 'react';
import { Drink } from '../types/drinks';
import Image from 'next/image';
export const DrinksList = ({
  drinks,
  isLoading,
}: {
  drinks: Drink[];
  isLoading: boolean;
}): ReactElement => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="grid  lg:grid-cols-[4fr_1fr]">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {drinks?.map((drink: Drink) => (
          <li
            key={drink.idDrink}
            className="col-span-1 flex flex-col divide-y divide-gray-200  bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col justify-between">
              <div className="aspect-square relative w-full">
                <Image src={drink.strDrinkThumb as string} alt="tasty drink" fill />
              </div>
              <div className="p-3">
                <h1 className="tracking-wider">{drink.strDrink}</h1>
                <p className="mt-2 cursor-pointer text-blue-700 text-xs">
                  See The Recipe
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">test</div>
    </div>
  );
};
