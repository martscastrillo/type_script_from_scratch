/* DIFERENCIAS ENTRE INTERFACES Y CLASES
Una clase, es un template que contiene métodos, variables… el esqueleto de un objeto.
Una interfaz, es un “blueprint” ó plano que describe que propiedades debe tener el objeto.
Una clase te permite inicializar nuevos objetos, una interfaz no. */

/* ¿Cuándo usar interfacez?
cuando necesites crear un “contrato” de las propiedades y funciones que un objeto
debe tener. Son muy útiles cuando el mismo objeto se debe repetir en varios archivos
diferentes. Prácticamente, se utilizan para tipar nuestro código.
 */
type Sizes = 'S' | 'M' | 'L' | 'XL';
type UserId = string | number;
/* type Product = {
    id: string | number;
    title: string;
    createdAt: string;
    stock: number;
    size?: Sizes;
} */
interface Product {
    id: string | number;
    title: string;
    createdAt: string;
    stock: number;
    size?: Sizes;
}
const products : Product[] = [];

products.push({
    id:'1',
    title: 'p1',
    createdAt: new Date();
    stock: 90
});

const addProduct = (data: Product) => {
    products.push(data);
}