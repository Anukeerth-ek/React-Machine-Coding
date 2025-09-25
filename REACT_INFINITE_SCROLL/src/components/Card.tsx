import { useEffect, useRef, useState } from "react";
import { ImageCard } from "./ImageCard";

const Card = () => {
     const [postData, setPostData] = useState<any>([]);
     const [limit] = useState(8);
     const [start, setStart] = useState(0);
     const [loading, setLoading] = useState(false);

     const loaderRef = useRef<HTMLDivElement | null>(null);

     const fetchApiData = async () => {
          try {
               setLoading(true);
               const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);

               const data = await res.json();
               setPostData((prev: any) => [...prev, ...data]);
          } catch (error) {
               console.error(error);
          } finally {
               setLoading(false);
          }
     };

     useEffect(() => {
          fetchApiData();
     }, [start]);

     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    const target = entries[0];

                    if (target.isIntersecting) {
                         setStart((prev) => prev + limit);
                    }
               },
               { threshold: 1.0 }
          );

          if (loaderRef.current) {
               observer.observe(loaderRef.current);
          }

          return () => {
               if (loaderRef.current) {
                    observer.unobserve(loaderRef.current);
               }
          };
     }, [loading]);

     return (
          <div>
               <ImageCard data={postData} />

               <div ref={loaderRef} style={{ height: "20px" }} />
               {loading && <p className="text-center mt-5">Loading...</p>}
          </div>
     );
};

export default Card;
