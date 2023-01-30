import { Drink } from '../types/drinks';
import Image from 'next/image';
export const DrinkSelection = ({
  selectedDrink,
}: {
  selectedDrink: Drink | null;
}) => {
  return (
    <div className="hidden lg:block  bg-white rounded-xl shadow-lg p-6 h-5/6">
      {!selectedDrink && <h1 className="text-lg font-bold">Select a drink</h1>}
      {selectedDrink && (
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">{selectedDrink.strDrink}</h2>
          <div className="mb-6 relative aspect-square">
            <Image
              src={selectedDrink.strDrinkThumb as string}
              alt={selectedDrink.strDrink}
              fill
            />
          </div>
          <h3 className="text-lg font-bold ">Ingredients:</h3>
          <ul className="flex flex-col gap-1 mb-5">
            {Object.keys(selectedDrink)
              .filter(
                (key) =>
                  key.includes('strIngredient') && selectedDrink[key as keyof Drink]
              )
              .map((key) => (
                <li key={key}>{selectedDrink[key as keyof Drink]}</li>
              ))}
          </ul>
          <p className="text-lg font-bold">Instructions</p>
          <p>{selectedDrink.strInstructions}</p>
        </div>
      )}
    </div>
  );
};
