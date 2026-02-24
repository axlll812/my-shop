export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export const products = [
    { id: 1, name: "Красный шар", price: 9.99, image: "/images/products/ornament1.png" },
    { id: 2, name: "Золотой шар", price: 14.99, image: "/images/products/ornament2.png" },
    { id: 3, name: "Минималистичный шар", price: 12.49, image: "/images/products/ornament3.png" },
    { id: 4, name: "Стеклянный шар", price: 8.99, image: "/images/products/ornament4.png" },
    { id: 5, name: "Декоративный элемент", price: 11.99, image: "/images/products/ornament5.png" },
    { id: 6, name: "Нейтральный шар", price: 17.49, image: "/images/products/ornament6.png" },
];