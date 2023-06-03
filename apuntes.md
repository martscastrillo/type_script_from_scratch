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

```
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
