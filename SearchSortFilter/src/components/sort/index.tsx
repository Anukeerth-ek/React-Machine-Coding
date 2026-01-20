import { useState } from "react";

type SortBarProps = {
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedSortMethod: string;
}

const SortBar = ({onSelectChange, selectedSortMethod}: SortBarProps) => {
  
  return (
    <div className="w-full sm:w-64">
      <label className="block text-sm font-medium mb-1 text-gray-700">
        Sort By
      </label>
      <select onChange={onSelectChange} value={selectedSortMethod} className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option value="NAME_ASC">Name (A → Z)</option>
            <option value="NAME_DESC">Name (Z → A)</option>
            <option value="PRICE_ASC">Price (Low → High)</option>
            <option value="PRICE_DESC">Price (High → Low)</option>
      </select>
    </div>
  );
};

export default SortBar;
