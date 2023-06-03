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


