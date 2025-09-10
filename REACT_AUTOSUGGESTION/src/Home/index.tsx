import AutoComplete from "../components/AutoComplete";
import Header from "../components/Header";

export const Home = () => {
     return (
          <div className="home">
               <div className="home-wrapper">
                    <Header />
                    <AutoComplete />
               </div>
          </div>
     );
};
