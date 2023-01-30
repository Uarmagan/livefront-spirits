import type { NextPage } from 'next';
import { useState } from 'react';
import { DrinkSelection } from '../components/drinkSelection';
import { DrinksList } from '../components/drinksList';
import { Search } from '../components/search';
import { useDrinks } from '../hooks/useDrinks';
import { Drink } from '../types/drinks';

const Home: NextPage = () => {
  const [filter, setFilter] = useState<string>('');
  const { data, isLoading } = useDrinks(filter);
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="h-screen">
      <div className="col-span-10 bg-gray-100 flex flex-col px-4 gap-6 ">
        <Search setFilter={setFilter} />
        <div className="grid md:grid-cols-[3fr_1fr] gap-x-3 h-screen">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <DrinksList drinks={data} setSelectedDrink={setSelectedDrink} />
          )}
          <DrinkSelection
            selectedDrink={selectedDrink}
            setSelectedDrink={setSelectedDrink}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
