import type { NextPage } from 'next';
import { useState } from 'react';
import { DrinksList } from '../components/drinksList';
import { Search } from '../components/search';
import { useDrinks } from '../hooks/useDrinks';

const Home: NextPage = () => {
  const [filter, setFilter] = useState<string>('');
  const { data, isLoading, isFetching, isPreviousData, status } = useDrinks(filter);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 bg-gray-800">
          {/* <!-- Left navbar content goes here --> */}
        </div>
        <div className="col-span-9 bg-gray-100 flex flex-col">
          <Search setFilter={setFilter} />
          <DrinksList drinks={data?.drinks} />
        </div>
      </div>
    </div>
  );
};

export default Home;
