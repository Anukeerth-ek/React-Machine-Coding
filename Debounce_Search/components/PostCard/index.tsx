import { useEffect, useMemo, useState } from "react";
import "./style.css";

interface Post {
     title: string;
     body: string;
     id: number;
}

const PostItem = ({ post }: { post: Post }) => (
     <div>
          <p>{post.title}</p>
     </div>
);

const PostCard = () => {
     const [postData, setPostData] = useState<Post[]>([]);
     const [searchTerm, setSearchTerm] = useState("");
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");

     const url = "https://dummyjson.com/posts";

     useEffect(() => {
          const fetchPostData = async () => {
               try {
                    setLoading(true);
                    setError("");
                    const res = await fetch(url);
                    if (!res.ok) {
                         throw new Error(`Failed to fetch the post: ${res.status}`);
                    }
                    const data = await res.json();
                    setPostData(data.posts);
               } catch (error: any) {
                    console.error("Error: ", error);
                    setError(error.message || "Something went wrong");
                    setPostData([]);

                    setLoading(false);
               } finally {
                    setLoading(false);
               }
          };
          fetchPostData();

          return () => {};
     }, []);

     const filteredPost = useMemo(() => {
          return postData.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
     }, [postData, searchTerm]);

     if (loading) return <p>Loading...</p>;
     if (error)
          return (
               <p>
                    {error} <button onClick={() => window.location.reload()}>Refresh Page</button>
               </p>
          );

     return (
          <>
               <input
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    type="search"
                    placeholder="Search here...."
               />
               <div className="postCard">
                    {filteredPost.length > 0 ? (
                         filteredPost.map((post: Post) => <PostItem key={post.id} post={post} />)
                    ) : (
                         <p>No Data Available</p>
                    )}
               </div>
          </>
     );
};

export default PostCard;
