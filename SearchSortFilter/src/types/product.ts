export type Product = {
    id: number;
    title: string;
    price: number;
    rating: number;
    image: string;
    category: string;
}

export type SortOption = {
    key: keyof Product;
    order: 'asc' | 'desc';
}