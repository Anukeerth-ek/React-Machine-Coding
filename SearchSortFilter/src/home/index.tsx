import SearchBar from "../components/searchbar";
import Sort from "../components/sort";
import Filter from "../components/filter";
import ProductContainer from "../productContainer";
import { useState } from "react";
import SortBar from "../components/sort";
import FilterBar from "../components/filter";

const Home = () => {
     const [searchTerm, setSearchTerm] = useState("");

     const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setSearchTerm(value);
     };

     const handleProductSort = () => {};
     return (
          <div>
               Home
               <SearchBar onSearchChange={onSearchChange} searchTerm={searchTerm} />
               <SortBar />
               <FilterBar />
               <ProductContainer searchTerm={searchTerm} />
          </div>
     );
};

export default Home;
