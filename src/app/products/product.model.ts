import {Category} from './../categories/categories.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
    id: string | number;
    title: string;
    createdAt: string;
    stock: number;
    size?: Sizes;
    category : Category
}
