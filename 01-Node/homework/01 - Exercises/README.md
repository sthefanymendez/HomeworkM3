# HW 01: Node | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework vas a implementar comandos bash comunes usando Node.js.

---

<br />

## **📍 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **📖 Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

-  Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

¡Listo! Ya puedes correr los test:

```bash
npm test
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

---

<br />

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta llamada `commands`.
-  Una carpeta llamada `test`.
-  Un archivo **bash.js**.
-  Un archivo **package.json**.
-  Y el archivo **README.md** que ahora mismo estás leyendo. 😙

---

<br />

## **👩‍💻 EJERCICIO 1**

### **PROCESS**

📍 Dirígete al archivo `bash.js`. Encontrarás las variables "**process**" y "**commands**" importados en este archivo. Trabajaremos con ambas.

📍 Lo que hay que hacer:

1. Crea una función con el nombre `printOutput`. Esta función recibirá por parámetro un **output**. Dentro de ella tendrás que utilizar el método **stdout.write** del objeto `process` dos veces. La primera vez le pasarás como argumento el **output** recibido. La segundo vez el argumento deberá ser: "\nprompt > ".

2. Dentro de este archivo utiliza el método **stdout.write** del objeto `process` pasándole como argumento el string: "prompt > ".

3. Dentro de este archivo utiliza el método **stdin.on** del objeto `process` al cual le deberás pasar dos parámetros.

   -  El primero debe ser el string: "data".

   -  El segundo debe ser una función que recibe por parámetro `data`.

      A) Dentro de la función crea una variable con el nombre "**args**". Esta variable debe contener un arreglo con cada uno de los caracteres de lo que se recibe por parámetro. Ten en cuenta que el parámetro que recibes no es un string, por lo que tendrás que convertirlo en uno. También ten en cuenta que si este string tiene espacios vacíos al comienzo o al final deberás eliminarlos.

      B) Guarda en una variable llamada "**cmd**" el primer elemento del arreglo anterior.

      C) Ahora verifica si dentro del objeto `commands` existe una propiedad con el valor que contiene la vairbale "**cmd**". En el caso que no existe, ejecuta la función `printOutput` con el texto "command not found: **_cmd_**". En el caso de que si exista, ejecuta el siguiente código:

      ```bash
      commands[cmd](printOutput, args);
      ```

---

<br />

## **👩‍💻 EJERCICIO 2**

📍 Dirígete al archivo `commands/index.js`. Encontrarás las variables "**request**", "**process**" y "**fs**" importadas en este archivo. Trabajaremos con ambas.

📍 Lo que hay que hacer:

### **PWD**

*PWD* permitirá imprimir la ruta hacia el directorio en el que estás trabajando.
1. Crea una función llamada `pwd`. Esta recibirá por parámetro el valor "print".
2. Utiliza la función `print`. Como argumento pásale el objeto `process` siendo ejecutado con el método **cwd**.

---

<br />

### **DATE**

*DATE* imprimirá la fecha actual de tu máquina.
1. Crea una función llamada `date`. Esta recibirá por parámetro el valor "print".
2. Utiliza la función `print`. Como argumento pásale la función `Date` siendo ejecutada.

---

<br />

### **ECHO**

*ECHO* imprimirá el texto que escribas en la consola.
1. Crea una función llamada `echo`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Utiliza la función `print`. Como argumento pásale la función el parámetro `args` aplicándole el siguiente método:

```javascript
args.join(' ');
```

---

<br />

### **LS**

*LS* va a imprimir los archivos y carpetas que estén disponibles en tu directorio actual.
1. Crea una función llamada `ls`. Esta recibirá por parámetro un valor: "print".
2. Invoca el método `readdir` de la constante `fs` para leer los archivos actuales.  
tendrás que pasarle como argumento un string con un valor de `.` (El punto hace referencia a tu directorio actual)  
 y un callback, que recibirá a su vez 2 parámetros, `error` (Posible error que pueda devolver el callback)  
 y `files` (un array de string conteniendo los archivos y carpetas encontrados).
3. Si `fs.readdir` devuelve un error arrójalo. (Puedes usar `throw error`)
4. Invoca la función `print` y pásale como argumentos los archivos encontrados.  
*IMPORTANTE*: ¡Debes pasarlos como un string, sino se imprimirá un arreglo y arrojará un error!

---

<br />

### **CAT**

*CAT* Imprimirá en la consola cualquier archivo que le indiques. Recuerda que si quieres imprimir un archivo  
por fuera del directorio que estás parado, deberás indicar la ruta hacia el mismo.
1. Crea una función llamada `cat`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Invoca el método `readFile` de `fs` y pásale los siguientes argumentos:
  - `args` (El parámetro que recibes en la función `cat`)
  - Un string `'utf-8'` (El formato Unicode que deberá tener el texto)
  - Un callback con los parámetros `error` y `data`
3. Si `fs.readFile` devuelve un error arrójalo. (Puedes usar `throw error` como se mencionó antes)
4. Invoca la función `print` y pásale como argumento el parámetro `data` (Que es el archivo encontrado)

---

<br />

### **HEAD**

*HEAD* Imprimirá las primeras *8* línea de cualquier archivo que indiques, ten en cuenta los mismos puntos  
descritos en la función de *CAT* para utilizarlo correctamente.
1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Invoca el método `fs.readFile` y pásale los siguientes argumentos:
  - `args` (El parámetro que recibes en la función `cat`)
  - Un string `'utf-8'` (El formato Unicode que deberá tener el texto)
  - Un callback con los parámetros `error` y `data`
3. Si `fs.readFile` devuelve un error arrójalo. (Puedes usar `throw error` como se mencionó antes)
4. Invoca la función `print` y pásale como argumento la primera línea del archivo `data` (¡Te toca pensar cómo hacerlo!)

---

<br />

### **TAIL**

*TAIL* Permitirá imprimir la última línea de cualquier archivo que indiques, ten en cuenta las mismas
anotaciones descritas en el ejercicio de *CAT* para utilizarlo correctamente.
1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Invoca el método `fs.readFile` y pásale los siguientes argumentos:
  - `args` (El parámetro que recibes en la función `cat`)
  - Un string `'utf-8'` (El formato Unicode que deberá tener el texto)
  - Un callback con los parámetros `error` y `data`
3. Si `fs.readFile` devuelve un error arrójalo. (Puedes usar `throw error` como se mencionó antes)
4. Invoca la función `print` y pásale como argumento la última línea del archivo `data` (¡Te toca también pensar cómo hacerlo!)

---

<br />

### **CURL**

*CURL* Imprimirá cualquier respuesta de una url que le puedas proveer, tiene que tener el prefijo `https://` antes de  
ingresar la dirección.
1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Invoca la función `request` que se encuentra importada más arriba y pásale los siguientes argumentos:
- `args` (El parámetro que recibes en la función `curl`).
- un callback con los parámetros `error`, `response`, `body`.
*Nota* `response` no lo vas a utilizar en esta ocasión.
3. Si `request` devuelve un error, arrojarlo (Puedes usar `throw error` como se mencionó antes).
4. Invoca la función `print` y retorna `body` (La respuesta que brinda `curl`).

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**VARIABLES GLOBALES DE NODE**](https://apuntes.de/nodejs-desarrollo-web/globals/#gsc.tab=0)
-  Documentación [**VARIABLE GLOBAL PROCESS**](https://nodejs.org/docs/latest-v16.x/api/process.html)
-  Documentación [**NODE**](https://nodejs.org/en/docs/)
-  Documentación [**FILE SYSTEM**](https://nodejs.org/api/fs.html)

---

<br />

¡Listo! Aprendiste a crear los comandos más básicos de una terminal bash.
