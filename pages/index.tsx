import type { NextPage } from 'next';
import { useState } from 'react';
import { DrinksList } from '../components/drinksList';
import { Search } from '../components/search';
import { useDrinks } from '../hooks/useDrinks';

const Home: NextPage = () => {
  const [filter, setFilter] = useState<string>('');
  const { data, isLoading } = useDrinks(filter);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-2 bg-gray-800">
          {/* <!-- Left navbar content goes here --> */}
        </div>
        <div className="col-span-10 bg-gray-100 flex flex-col px-4 gap-6">
          <Search setFilter={setFilter} />
          <DrinksList drinks={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
