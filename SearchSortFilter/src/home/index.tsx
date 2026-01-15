
import SearchBar from '../components/searchbar';
import Sort from '../components/sort';
import Filter from '../components/filter';
import ProductContainer from '../productContainer';

const Home = () => {
  return (
      <div>Home
          <SearchBar />
          <Sort />
          <Filter />
          <ProductContainer/>
    </div>
  )
}

export default Home;