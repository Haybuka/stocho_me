/* eslint-disable react/prop-types */
import 'regenerator-runtime/runtime';
import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
// import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onFilterChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <label className="block relative floated-label w-full my-3 border rounded-md">
      <div className="absolute top-1/2 -translate-y-1/2 left-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#4F4F4F"
          className="w-5 h-5 text-[#4F4F4F]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="search"
        name="search"
        className="w-full py-2 px-10 outline-none focus:outline-transparent cursor-pointer rounded-md border-none lowercase"
        placeholder="search poll category, Aspirant..."
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onFilterChange(e.target.value);
        }}
      />
    </label>
  );
};

export default GlobalFilter;
