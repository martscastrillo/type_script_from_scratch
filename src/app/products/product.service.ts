import {Product} from './product.model'
import { CreateProductDto } from "./product.dto"
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

export const updateProduct = (id: string, changes: Product) => {

}
