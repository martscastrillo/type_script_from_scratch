import {Product} from './product.model'
import { CreateProductDto, UpdateProductDto, FindProductDto} from "./product.dto"
import faker from '@faker-js/faker';

const products : Product[] = [];

export const addProduct = (data: CreateProductDto) : Product => {
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category : {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
    }
    products.push(newProduct);
}

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
    const index = products.findIndex(item => item.id === id);
    products[index] = {
        ...prevData,
        ...changes
    }
    return products[index];
}

export const findProducts = (dto: FindProductDto) : Product[] => {

    return products;
}