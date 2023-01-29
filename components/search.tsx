import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ReactElement, useState } from 'react';
import { useDrinks } from '../hooks/useDrinks';

export const Search = ({ setFilter }: any): ReactElement => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFilter(e.target.search.value);
  };
  return (
    <div className="flex flex-1 justify-between px-4 py-3">
      <form className="flex w-full md:ml-0 " onSubmit={handleSubmit}>
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="search-field"
            className="block border-transparent py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm bg-white h-16 rounded-2xl px-4 shadow-lg w-full"
            placeholder="Search"
            type="search"
            name="search"
            // onChange={(e) => {
            //   const val = e.target.value;
            //   setSearch(val);
            // }}
            // value={search}
          />
        </div>
      </form>
    </div>
  );
};
