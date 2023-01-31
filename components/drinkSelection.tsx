import { Drink } from '../types/drinks';
import Image from 'next/image';
import { ReactElement } from 'react';

export const DrinkSelection = ({
  selectedDrink,
  setSelectedDrink,
}: {
  selectedDrink: Drink | null;
  setSelectedDrink: (drink: Drink | null) => void;
}): ReactElement => {
  return (
    <>
      <div
        data-testid="drink-selection-section"
        className={` ${
          selectedDrink ? 'mobile-drink-selector' : 'desktop-drink-selector'
        } `}
      >
        {!selectedDrink && (
          <h1 className="text-lg font-bold text-gray-600 text-center font-serif">
            Choose a Drink
          </h1>
        )}
        {selectedDrink && (
          <div className="flex flex-col max-md:items-center relative text-center items-center">
            <button
              className="absolute top-0 right-0 md:hidden"
              onClick={() => setSelectedDrink(null)}
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedDrink.strDrink}</h2>
            <div className="mb-6 relative aspect-square max-md:w-1/2 w-full lg:w-3/4">
              <Image
                src={selectedDrink.strDrinkThumb as string}
                alt={selectedDrink.strDrink}
                fill
              />
            </div>
            <h3 className="text-lg font-bold ">Ingredients:</h3>
            <ul className="flex flex-col gap-1 mb-5 ">
              {Object.keys(selectedDrink)
                .filter(
                  (key) =>
                    key.includes('strIngredient') &&
                    selectedDrink[key as keyof Drink]
                )
                .map((key) => (
                  <li key={key}>{selectedDrink[key as keyof Drink]}</li>
                ))}
            </ul>
            <p className="text-lg font-bold">Instructions</p>
            <p className="w-4/5 text-left">{selectedDrink.strInstructions}</p>
          </div>
        )}
      </div>

      <div
        role={'presentation'}
        className={`${selectedDrink ? 'overlay' : 'hidden'}`}
        onClick={() => setSelectedDrink(null)}
      />
    </>
  );
};
