export const ImageCard = (props: any) => {
     const data = props.data;

     return (
          <div className="mx-10 md:mx-20 mt-5">
               <div className="flex flex-wrap gap-6 gap-y-6">
                    {data?.map((item: any, index: any) => (
                         <div
                              key={index}
                              className=" h-[200px] border-2 shadow-lg rounded-xl p-3 hover:shadow-2xl hover:shadow-rose-500 duration-300"
                         >
                              <img alt="image here" src={item.thumbnailUrl} className="w-full object-contain" />
                              <div className="flex items-center justify-between gap-x-3 mt-3">
                                   <h2>{item.id}.</h2>
                                   <h3>{item.title}</h3>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};
