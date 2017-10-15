export class Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    condition: Condition;
    category: string;
}

export enum Condition{
    New,
    Used,
    Discontinued
}

const p1: Product = {
    _id: '1',
    name: 'Iphone X',
    description: 'Smartphone designed by Apple.',
    price: 999,
    condition: Condition.New,
    category: 'Mobile Device'
}
const p2: Product = {
    _id: '2',
    name: 'Samsung Note 8',
    description: 'Smartphone designed by Samsung.',
    price: 920,
    condition: Condition.New,
    category: 'Mobile Device'
}

export const products = [p1, p2];