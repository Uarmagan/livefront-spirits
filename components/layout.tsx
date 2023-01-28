import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-3 bg-gray-800">
          {/* <!-- Left navbar content goes here --> */}
        </div>
        <div className="col-span-9 bg-gray-100 flex flex-col">
          <div className="flex flex-1 justify-between px-4 py-3">
            <form className="flex w-full md:ml-0 " action="#" method="GET">
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
                />
              </div>
            </form>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
