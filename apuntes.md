# Curso de Fundamentos de TypeScript

¿TypeScript es diferente a JavaScript? ¿Un desarrollador en TypeScript es diferente a uno en JavaScript? La respuesta a ambas es sí, sin embargo, no hay una notable diferencia. Uno (TypeScript) se base en el otro (JavaScript) añadiendo elementos para mejorar la detección de bugs y experiencia de desarrollo.

## Configurado nuestro proyecto

No vamos a instalar TypeScript de manera global, sino solo para el proyecto, ya que normalmente así se hace en mundo real. Se trabaja por proyecto.

Realicemos los siguientes pasos:

1. Creamos una carpeta para nuestro proyecto (el nombre que desees) e ingresamos a la misma. Mediante la terminal sería lo siguiente:

```
mkdir ts-project
cd tsc --version
```

2. Abrimos nuestro editor de código desde la ubicación de la carpeta del proyecto. Si usas Visual Studio Code, usando la terminal es así:

```
code .
```

3. Crearemos los siguientes archivos:
   Un archivo .gitignore en el editor o desde la terminal. Para su contenido, podemos utilizar la página gitignore.io. En nuestro programa necesitaremos las siguientes especificaciones:
   Luego copiamos lo que nos genera la web y lo pegamos en nuestro gitignore desde nuestro editor de código.

Un archivo .editorconfig (opcional), si estás usando Visual Studio Code, con el fin de dar una configuración simple y sencilla a la hora de ejecutar código. Aquí copia y pega lo siguiente:

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

4. Necistaremos también tener creado una carpeta de nombre src dentro de nuestro proyecto
5. Ahora crearemos nuestro archivo package.json de manera simple desde la terminal y dentro de la ruta del proyecto:

```
npm init -y
```

6. Finalmente, instalemos TypeScript 😊. Desde la terminal y dentro de la ruta del proyecto, ejecuta:

```
npm install typescript --save-dev
```

Para verificar la versión instalada:

```
npx tsc --version
```

## Atrapando bugs

El análisis de código estático nos ayudará a detectar fallas en nuestro programa durante su desarrollo.

En la carpeta src del proyecto de curso, vamos a crear un archivo JavaScript llamado demo.js. El código base es el siguiente:

```javascript
(()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET'
    });
    const data = await rta.parseJson();
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (const i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
```

Al analizarlo nos damos cuenta de que tiene unos errores que podrían pasar desapercibidos al no ver advertencias. Es hasta que lo ejecutamos en un navegador web o entornos como NodeJS que los bugs saldrán a relucir. Por lo que, nosotros como desarrolladores, esto no es conveniente, pues queremos feedback lo más pronto posible.

## El compilador de TypeScript

Este compilador lo que realmente hace es transpilar, pues ni el navegador ni Node.js (a abril de 2022) pueden leer nativamente archivos TypeScript, por lo que realiza un proceso de traducción en la que su código lo convierte a JavaScript.

### Compilación de archivos TypeScript desde Node.js

Para realizar el proceso de transpilación en Node.js, ejecutemos lo siguiente en la terminal:

```
npx tsc archivo_typescript.ts
```

Tras esto, se creará un archivo JavaScript dentro de la misma carpeta donde este tu archivo TypeScript y con el mismo nombre. Por ejemplo, en nuestro proyecto realizamos esa operación dentro de la carpeta src con el archivo 01-hello.ts, dando como resultado:

#### Compilación a una versión específica

Podemos hacer que nuestro archivo TypesSript sea transpilado a un archivo JavaScript, por ejemplo, con el estándar ECMAScript 6. Para ello ejecutemos:

```
npx tsc archivo_typescript.ts --target es6
```

#### Enviando compilación a una carpeta

Si deseas que los archivos transpilados no se generen en la misma carpeta donde están tus archivos TypeScript, puedes indicarle al compilador hacia donde quieres que vayan:

```
npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino
```

También podrías indicar que deseas aplicar la anterior operación a todos los archivos con extensión TypeScript:

```
npx tsc *.ts --target es6 --outDir carpeta_destino

```
## Creando un archivo TSConfig.json
En la terminal, ubicándonos dentro del directorio en el que queremos que se cree el archivo, ejecutemos:
```
npx tsc --init
```
Nos creará automáticamente el archivo con propiedades básicas activadas:
Dentro del archivo TSConfig.json podemos ver que tiene muchas propiedades comentadas (desactivadas) y de las cuales solo algunas están activadas.

### Compilación en TypeScript

Nuestro código TypeScript se transpilará según las propiedades indicadas en nuestro archivo `TSConfig.json``:
```
npx tsc
```
### Compilación en tiempo real

Nos puede resultar tedioso estar ejecutando el comando anterior siempre después de escribir nuestro código. Para evitar esto, podemos hacer que el compilador esté detectando cada cambio que realicemos en nuestros archivos TypeScript y haga la transpilación de inmediato:
```
npx tsc --watch
```
## Qué es el tipado en TypeScript
El tipado en TypeScript hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, conocido como type annotation, con esto evitamos mezclar distintos tipos de datos.

### La flexibilidad de JavaScript

Nosotros podemos declarar una variable de un tipo de valor y a lo largo del código ir cambiándolo si lo deseamos. Por lo que en un momento puede ser de tipo string y después de tipo boolean
Para proyectos de sofware que tienen una gran escalabilidad, esto podría ser fuente de fallas en el programa.

### Controlando la flexibilidad

Gracias a TypeScript podemos manejar el tipado de las variables para evitar anomalías en el código.

En JavaScript, para declarar una variable constante lo realizamos así:
```javascript
const productPrice = 12;
```
En TypeScript, para el caso anterior, es similar solo que añadimos : y el tipo de dato de la variable, la cual sería number. A esto último se le llama type annotation o anotación de tipo:
```javascript
const productPrice: number = 12;
```
## Tipos inferidos
TypeScript puede inferir el tipo de dato de una variable a pesar de no haberlo declarado explícitamente.

### Inferencia de tipos

A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:
```javascript
let myName = "Victoria";
```
Si bien no indicamos el tipo de dato como se haría de esta manera:
```javascript
let myName: string = "Victoria";
```
TypeScript infiere que la variable myName será del tipo string y en adelante no podrá tomar un valor que no sea de este tipo de dato.
```javascript
myName = 30; 
//Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
```
### Nombres de variables iguales

TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:
```javascript
( () => {
    let myName = "Victoria";
})();
```
Lo mismo por cada variable que desees tener el mismo nombre (myName para este ejemplo) deberás crear este tipo de función para evitar que te den estas advertencias.
## Numbers
El tipo de dato number se usa para variables que contendrán números positivos, negativos o decimales.

### Operaciones

En JavaScript, una variable de tipo number puede fácilmente ser concatenado con otra de tipo string:
```javascript
//JavaScript
let myNumber = 30;
myNumber = myNumber + "5"; //El resultado sería '305'
``` 
Sin embargo, esto podría llevar confusiones y errores durante la ejecución del programa, además de estar cambiando el tipo de dato de la variable. Por ello, en TypeScript solo se pueden hacer operaciones numéricas entre números valga la redundancia:
```javascript
//TypeScript
let myNumber: number = 30;

myNumber = myNumber + 10; //CORRECTO
myNumber = myNumber + "10"; //INCORRECTO
``` 
### Uso de variables sin inicializar

Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial:
```javascript
//TypeScript
let productInStock: number;
console.log("Product in stock: " + productInStock);
``` 
Señalar que si no se va a inicializar aún la variable, definir explícitamente el tipo de dato, pues TypeScript no puede inferirlo si no tiene un valor inicial.

### Conversión de números de tipo string a tipo number

Para esto usaremos el método parseInt:
```javascript
let discount: number = parseInt("123");

let numeroString: string = "100";
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString);
```
Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario, el resultado será de tipo NaN (Not a Number):
```javascript
//TypeScript
let numeroPrueba: number = parseInt("palabra");
console.log(numeroPrueba); //NaN
Binarios y Hexadecimales
```
TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango:
```javascript
//**********TypeScript**********
//Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010; //CORRECTO
let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xfff; //CORRECTO
let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido
```
En consola, si están correctamente asignados, se hará una conversión a decimal de dichos números:
```javascript
let primerHexa = 0xfff;
console.log(primerHexa); // 4095

let primerBinario = 0b1010;
console.log(primerBinario); // 10
```
### Consejo

Cuando definas una variable de tipo de dato number, es preferible que el nombre de tipo sea en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato number y no al objeto Number propio del lenguaje:
```javascript
let myNumber: number = 20; // Buena practica.
let otherNumber: Number = 20; // Mala practica.
```
## Booleans
Este tipo de dato puede tomar dos valores: true o false.
```javascript
let isEnable: boolean = true;
let isNew = false;
```
## Strings
Este tipo de dato nos permite almacenar una cadena de caracteres.

Podemos definir un string con:

1. Comillas simples:
```javascript
let myProduct = 'Soda'; //CORRECTO
let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO
``` 
Se pueden usar comillas dobles dentro, más no otra vez comillas simples.

2. Comillas dobles:
```javascript
let myProduct = "Soda"; //CORRECTO
let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO
``` 
Se puede usar comillas simples dentro, más no otra vez comillas dobles.

3. Usando backticks:
```javascript
let myName = `Frank`;
``` 
Esta forma de asignar string trae algunas ventajas:

- Declarar valores de múltiples líneas:
```javascript
let texto = `
    Nunca
    pares
    de aprender :)
`;
``` 
- Concatenar dentro del mismo string. Para esto es necesario usar este símbolo del dólar seguido de llaves ${} y escribir lo que queremos concatenar dentro de esas llaves:
```javascript
let variableTitulo = "TypeScript";
let summary = `
    title: ${variableTitulo}
`;
``` 
- También respeta la indentación:
```javascript
let html= `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ...
  </body>
</html>
`;
``` 
## Arrays
Es una colección de datos ordenada. Los definimos de la siguiente manera:
```javascript
let prices = [1,2,3,4,5];

/* Método Push para agregar un elemento al final del array */
prices.push(6);
console.log(prices); // [1,2,3,4,5,6]
```
Para el array prices, TypeScript, de no indicarle explícitamente, va a inferir que este solo contendrá valores del tipo number, por lo que si se quiere agregar un valor string, por ejemplo, nos indicará un error:
```javascript
//TypeScript
prices.push("texto"); //ERROR. Se espera agregar solo números al array.
```
Esto debido a que en su inicialización se le asignó un array que solo contenía números.

También nos indicará error si pretendemos hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo:
```javascript
let meses = ["Mayo","Junio","Julio"];
meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.
```
### Tipado de arrays en TypeScript

Lo puedes definir así:

Indicar explícitamente los tipos de datos que almacenará el array:
```javascript
let prices: (number | string)[] = ["hola",2,4,6,"mundo"];
let otherPrices: (boolean | number)[];
```
Para este caso, a menos que la variable sea una constante, no es necesario que inicialices la variable, pues ya le indicaste el tipo de dato.

En la inicialización de la variable, colocar datos con el tipo de dato que quieres que soporte tu array en adelante para que lo pueda inferir TypeScript:
```javascript
//TypeScript
let prices = ["hola",2,4,6,"mundo"];
// "hola", "mundo" => string
// 2,4,6 => number
```
Dejamos claro que queremos que soporte los tipos de dato string y number.
## Any
Es un tipo de dato exclusivo de TypeScript. Su traducción sería “cualquiera”, pues literalmente nos permite almacenar cualquier tipo de dato en una variable:
```javascript
let myDynamicVar: any;

myDynamicVar = 100; // number
myDynamicVar = null;
myDynamicVar = {}; // Object
myDynamicVar = ""; // string
```
Se recomienda no usar este tipo de dato, pues se considera mala práctica.

### Importancia del Any

La utilidad de any radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

### Tratar Any como un primitivo

Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:
```javascript
//Caso 1
myDynamicVar = "HOLA";
const otherString = (myDynamicVar as string).toLowerCase();

//Caso 2
myDynamicVar = 1212;
const otherNumber = (<number>myDynamicVar).toFixed();
```
Como observamos, podemos tratar nuestra variable any como string en el primer caso y como number en el segundo. Después de esto, podemos acceder a los métodos toLowerCase() y toFixed() según el tipo de dato correspondiente.

## Union Types
Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
```javascript
let userId: string | number;

userId = 10;
userId = "10";

function helloUser(id: string | number){
    console.log(`Hola usuario con el número de id ${id}`);
}
```
Aquí indicamos que id y userId pueden ser de tipo string o number.

### Una mejor práctica

El tipo de dato any nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.

## Alias y tipos literales

Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:
```javascript
type UserID = string | boolean | number;
``` 
¡Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number!
```javascript
let dynamicVar: UserID = "300";

dynamicVar = true;
dynamicVar = 200;
```
Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.
```javascript
type UserID = string | boolean | number;

let dynamicVar: UserID = "300";

function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
}
```
Nota: la palabra type en los Alias es algo propio de TypeScript.

### Tipos Literales (Literal Types)

Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:
```javascript
let shirtSize: "S" | "M" | "L" | "XL";

shirtSize = "M"; //CORRECTO

shirtSize = "S"; //CORRECTO

shirtSize = "qwrty"; //ERROR. No está en las opciones.

shirtSize = "SS"; //ERROR. Letra de más.

shirtSize = "m"; //ERROR. Está en minúscula.
```
Definimos que la variable shirtSize pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo string y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

### Alias + Tipos Literales

También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:
```javascript
type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSize: Sizes;

shirtSize = "M";

function yourSize( userSize: Sizes ){

    console.log(`Tu medida es ${userSize}`);

}
```
## Null y Undefined
Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, string o number.


El tipo de datonull es para indicar un valor nulo y undefined para algo indefinido. Son tipos diferentes.
### Null y Undefined como tipo Any

En TypeScript, si no especificamos que va a ser null o undefined, estos son inferidos como tipo any:
```javascript
//TypeScript

let myVar = null; //Tipo any

let otherVar = undefined; //Tipo any

let myNull: null = null; // Tipo null

let myUndefined: undefined = undefined; //Tipo undefined
```
Union Types como emergencia

Hay casos en la que queremos que una variable sea de tipo string o number y que al inicializarlas sean de tipo null o undefined para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los Union Types:
```javascript
let myNumber: number | null = null;

myNumber = 50;

let myString: string | undefined = undefined;

myString = "Hola TypeScript";
```
## Funciones 
Las funciones son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:

- Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):
```javascript
type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
){
   return {
        title,
        createdAt,
        stock,
        size
    }
}
```
En el argumento createdAt se indica que es de tipo Date en alusión al objeto Date propio de JavaScript y no a un tipo de dato como string o number. Son diferentes las definiciones.

- Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:
```javascript
const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
)
```
En Visual Studio Code, si dejas el cursor sobre el nombre de la función que vas a invocar, te mostrará un mensaje con los detalles de la función, lo que espera como parámetros y lo que devolverá indicando además el orden y el tipo de dato de cada variable.

- Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:
```javascript
type Sizes = 's' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
){
    /*Código de la función*/
}
 ```
 Nota: cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:
 ```javascript
 function randomFunc(title: string, amount?: number){} //CORRECTO

function otherFunc(title?: string, amount: number){} // ERROR
 ```
## Retorno de funciones

En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno:

### Retornos tipados en TypeScript

El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:

1. Void: funciones sin retorno
Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void. Se definen así:
```javascript
//TypeScript
function imprimirNombre(yourName: string): void {
    console.log(`Hello ${yourName}`);
}
```
2. Funciones con retorno
Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:
```javascript
//TypeScript
function suma(a: number, b: number): number {
    return a + b;
}

function holaMundo(): string {
    return "Hello, World!";
}
```
También los retornos pueden ser más de un tipo de dato:
```javascript
//TypeScript
function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if( b > a ) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
}
```
### TypeScript también lo infiere
Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea string, number, etc.) o si nada es devuelto (tipo void).

## Objetos en funciones
Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:
```javascript
//TypeScript
function imprimirDatos( data: { username: string, email: string } ): void {

    console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)
    
}

imprimirDatos({
      username: 'freddier',
      email: 'freddy@email.com'
})
```
En el ejemplo, el nombre data hace referencia al objeto que recibirá la función imprimirDatos. Por ello, para acceder al valor de username lo definimos en el console.log como data.username y para el email como data.email, pues así es como se accede a las propiedades de un objeto.

Finalmente, cuando invocamos imprimirDatos y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como data tal como lo hicimos en la definición de la función.

## Objetos como tipos
En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:
```javascript
//TypeScript
type userData = {
    username: string,
    email: string
}
```
Y luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir:
```javascript
//TypeScript
type userData = {
    username: string,
    email: string
}

let usersList: userData[] = [];

usersList.push({
    username: "freddier", //CORRECTO
    email: "freddy@email.com", //CORRECTO
});
usersList.push({
    username: "cvander", //CORRECTO
    email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
});
```
## Módulos: import y export
Nuestro código puede ser dividido en varios módulos (archivos), por lo que para poder usar las funciones o variables que existen en uno y queramos acceder desde otro, utilizamos import y export.

### Export
```javascript
/*---->  Archivo: funciones.ts  <----*/
export function suma(a: number, b: number): number {
    return a + b;
}

export function resta(a: number, b: number): number {
    return a - b;
}

export let numerosRandom = [1, 30, 40, 50];
export type Sizes = "S" | "M" | "L" | "XL";
```
Como observamos, tenemos un archivo llamado funciones.ts la cual contiene dos funciones: suma y resta. Si estas queremos usarlas desde otro archivo, necesitamos usar la palabra reservada export justo antes de definir nuestra función (lo mismo aplica para las variables). De esta forma indicamos que serán exportados para ser utilizados desde otro archivo JavaScript/TypeScript.

### Import
```javascript
/*---> Archivo: programa.ts  <---*/

import {suma, resta, Sizes} from "./funciones.ts";
```
Finalmente, las funciones o variables que queramos utilizar desde otro archivo son importadas de la siguiente manera:

1. Usamos la palabra reservada import
2. Entre llaves indicamos las funciones y/o variables que queremos acceder. Hacemos una separación con comas
3. Usamos la palabra reservada from, seguido de, entre comillas dobles o simples, la ruta de la ubicación en la que se encuentra el archivo del cual estamos importando su código.

## Usando librerías que soportan TypeScript

Las librerías que tienen soporte para TypeScript nos facilitan su uso, y más aún si usas editores de código que se integran bien con este “lenguaje”, pues brindan información muy útil como indicar:

- La cantidad de parámetros esperados por una función
- El tipo de datos de los parámetros y variables
- El tipo de dato que retornará la función
- Autocompletado al usar métodos de un módulo
- Mejores prácticas
