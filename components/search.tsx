import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ReactElement } from 'react';

export const Search = ({
  setFilter,
}: {
  setFilter: (arg: string) => void;
}): ReactElement => {
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setFilter(e.target.search.value);
  };
  return (
    <div className="flex justify-between py-3">
      <form
        className="flex w-full md:ml-0"
        data-testid="search-form"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-auto">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search-field"
              className="block border-transparent py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm md:text-lg bg-white h-16 rounded-2xl px-4 shadow-lg w-full"
              placeholder="Search Cocktail Name"
              type="search"
              name="search"
            />
          </div>
        </div>
        <button
          className=" text-white tracking-wide w-24 ml-5 rounded-lg bg-[#58b07d]"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};
