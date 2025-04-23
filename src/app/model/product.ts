export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    status: string;
    rating: number;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
}