export const createProduct = (
    id: string | number,
    isNew: boolean,
    stock ?: number, //parámetro opcional siempre se definen los opcionales al tiparlos al final
) => {
    return{
        id,
        stock: stock ?? 10,
        isNew: isNew ?? true
    }
}

const p1 = createProduct(1,true, 12);
console.log(p1);

const p2 = createProduct(1,true);
console.log(p2);

const p3 = createProduct(1,false, 0);
console.log(p3);