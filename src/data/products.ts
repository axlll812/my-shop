export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: "Стеклянный шар «Снежинка»",
        price: 19.99,
        image: "https://via.placeholder.com/300"
    },
    {
        id: 2,
        name: "Деревянная игрушка «Олень»",
        price: 14.99,
        image: "https://via.placeholder.com/300"
    }
];