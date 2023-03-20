import { Product } from "./product.model"

export interface CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
    categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>