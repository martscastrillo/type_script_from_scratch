/* Never Type
El tipo de dato never, más que todo sirve para tipar a una función que nunca va a finalizar o sencillamente que pueda terminar el programa en el caso de lanar una excepción. */

const withoutEnd = () => {
    while(true){
        console.log('never stop learning')
    }
}




const example = (input : unknown)=> {
    if(typeof input === 'string'){
        return 'es un string';
    } else if(Array.isArray(input)){
        return 'es un array'
    }
    return 'not match';
}

console.log(example('Hola'));
console.log(example([1,1,1,1]));
console.log(example(1212)); // se detiene
console.log(example('Hola despues del fail'));