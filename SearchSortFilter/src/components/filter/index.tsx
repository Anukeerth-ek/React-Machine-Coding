const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home",
  "Furniture",
  "Stationery",
];

const FilterBar = () => {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">Categories</p>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="
              px-4 py-1.5
              rounded-full
              border
              text-sm
              hover:bg-indigo-600
              hover:text-white
              transition
            "
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
