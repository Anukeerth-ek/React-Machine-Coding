import SearchBar from "../components/searchbar";
import ProductContainer from "../productContainer";
import { useState } from "react";
import SortBar from "../components/sort";
import FilterBar from "../components/filter";
import type { SortOption } from "../types/product";

const Home = () => {
     const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState<SortOption>({ key: 'title', order: 'asc' });
     const [selectedSortMethod, setSelectedSortMethod] = useState('')
     
     const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setSearchTerm(value);
     };

     const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       const value = e.target.value;
       setSelectedSortMethod(value)
          let key: keyof import("../types/product").Product;
          let order: 'asc' | 'desc';

          switch (value) {
               case "NAME_ASC":
                    key = 'title';
                    order = 'asc';
                    break;
               case "NAME_DESC":
                    key = 'title';
                    order = 'desc';
                    break;
               case "PRICE_ASC":
                    key = 'price';
                    order = 'asc';
                    break;
               case "PRICE_DESC":
                    key = 'price';
                    order = 'desc';
                    break;
               default:
                    key = 'title';
                    order = 'asc';
          }
          setSelectedSort({ key, order });
     };

     return (
          <div>
               Home
               <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
         <SortBar onSelectChange={onSelectChange} selectedSortMethod={selectedSortMethod} />
               <FilterBar />
         <ProductContainer searchTerm={searchTerm} selectedSort={ selectedSort} />
          </div>
     );
};

export default Home;
