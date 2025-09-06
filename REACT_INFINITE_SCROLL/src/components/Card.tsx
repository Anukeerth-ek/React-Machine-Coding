import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";

const Card = () => {
     const [data, setData] = useState([]);
     const [limit, setLimit] = useState(8);
     // const [loading, setLoading] = useState(true)
     const initialValue = 0;

     useEffect(() => {
          const fetchApiData = () => {
               // setLoading(true)
               fetch(`https://jsonplaceholder.typicode.com/photos`)
                    .then((res) => res.json())
                    .then((data) => setData(data.slice(initialValue, limit)));
                    // setLoading(false)
          };
          fetchApiData();
     }, [limit]);

     useEffect(() => {
          const handleInfiniteScroll = () => {
               if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                    setLimit((prevLimit) => prevLimit + 8);
               }
          };
          document.addEventListener("scroll", handleInfiniteScroll);
          return () => {
               window.removeEventListener("scroll", handleInfiniteScroll);
          };
     }, []);

     return (
          <div>
               <div>
                    <ImageCard data={data} />
               </div>
          </div>
     );
};

export default Card;
