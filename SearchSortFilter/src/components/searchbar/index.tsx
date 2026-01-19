
type SearchBarProps = {
     searchTerm: string;
     onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onSearchChange, searchTerm }: SearchBarProps) => {
     return (
          <div>
               <input
                    className="border border-2"
                    type="search"
                    placeholder="Search product..."
                    value={searchTerm}
                    onChange={onSearchChange}
               />
          </div>
     );
};

export default SearchBar;
