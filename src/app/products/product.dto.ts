import { Product } from "./product.model"

export interface CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
    categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;
/* Partial & Required en TS
Estos dos tipos de datos nos sirven para declarar que
todos los campos de una interfaz son opcionales u obligatorios.*/
export interface UpdateProductDto extends Partial <CreateProductDto> {}

type example2 = Required<Product>;

export interface FindProductDto extends Readonly<Partial <Product>> {}

type example3 = Readonly<Product>;