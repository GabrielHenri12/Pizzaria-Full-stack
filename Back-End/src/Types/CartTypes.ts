export type CartType = {
    id: number;
    length: number;
    size: string;
    id_pizza: number;
    id_user: number;
    pizza: {
        id: number;
        flavor: string;
        img: string;
        price: number;
        description: string;
    };
    user: {
        id: number;
        name: string;
        lastName: string;
        password: string;
        email: string;
    };
}