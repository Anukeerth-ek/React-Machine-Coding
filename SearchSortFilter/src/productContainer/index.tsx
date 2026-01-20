// import React from 'react'
import ProductCard from "../components/productCard";
import type { Product, SortOption } from "../types/product";

type ProductContainerProps = {
     searchTerm: string;
     selectedSort: SortOption;
};

const ProductContainer = ({ searchTerm, selectedSort }: ProductContainerProps) => {
     const products: Product[] = [
          {
               id: 1,
               title: "Wireless Headphones",
               price: 2999,
               rating: 4.5,
               image: "https://picsum.photos/300/300?random=1",
               category: "Electronics",
          },
          {
               id: 2,
               title: "Smart Watch",
               price: 4999,
               rating: 4.2,
               image: "https://picsum.photos/300/300?random=2",
               category: "Electronics",
          },
          {
               id: 3,
               title: "Running Shoes",
               price: 1999,
               rating: 4.0,
               image: "https://picsum.photos/300/300?random=3",
               category: "Fashion",
          },
          {
               id: 4,
               title: "Backpack",
               price: 1499,
               rating: 4.3,
               image: "https://picsum.photos/300/300?random=4",
               category: "Fashion",
          },
          {
               id: 5,
               title: "Bluetooth Speaker",
               price: 2499,
               rating: 4.4,
               image: "https://picsum.photos/300/300?random=5",
               category: "Electronics",
          },
          {
               id: 6,
               title: "Office Chair",
               price: 8999,
               rating: 4.6,
               image: "https://picsum.photos/300/300?random=6",
               category: "Furniture",
          },
          {
               id: 7,
               title: "Desk Lamp",
               price: 999,
               rating: 4.1,
               image: "https://picsum.photos/300/300?random=7",
               category: "Furniture",
          },
          {
               id: 8,
               title: "Coffee Mug",
               price: 399,
               rating: 4.0,
               image: "https://picsum.photos/300/300?random=8",
               category: "Home",
          },
          {
               id: 9,
               title: "Notebook",
               price: 199,
               rating: 3.9,
               image: "https://picsum.photos/300/300?random=9",
               category: "Stationery",
          },
          {
               id: 10,
               title: "Water Bottle",
               price: 499,
               rating: 4.2,
               image: "https://picsum.photos/300/300?random=10",
               category: "Home",
          },
          {
               id: 11,
               title: "Sunglasses",
               price: 1299,
               rating: 4.3,
               image: "https://picsum.photos/300/300?random=11",
               category: "Fashion",
          },
          {
               id: 12,
               title: "Keyboard",
               price: 3499,
               rating: 4.5,
               image: "https://picsum.photos/300/300?random=12",
               category: "Electronics",
          },
     ];

     const filteredProduct = products.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

     const sortedProducts = [...filteredProduct].sort((a, b) => {
          const aVal = a[selectedSort.key];
          const bVal: any = b[selectedSort.key];
          //   console.log('bVal', bVal )
          //   console.log('aVal', aVal )

          if (typeof aVal === "string") {
               const comparison = aVal.toLowerCase().localeCompare(bVal.toLowerCase());
               return selectedSort.order === "asc" ? comparison : -comparison;
          } else {
               const comparison = aVal - bVal;
               return selectedSort.order === "asc" ? comparison : -comparison;
          }
     });

     return (
          <div className="max-w-7xl mx-auto p-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sortedProducts.map((product) => (
                         <ProductCard key={product.id} {...product} />
                    ))}
               </div>
          </div>
     );
};

export default ProductContainer;
