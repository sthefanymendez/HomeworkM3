# HW 03: Promises | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework vas a analizar un poco de código asincrónico utilizando vanilla callbacks y luego vas a escribir código que haga acciones idénticas pero usando promesas.

---

<br />

## **📍 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **📖 Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

- Cuando te encuentres en esta carpeta, debes ejecutar el comando

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

- Una carpeta llamada `poem-one`.
- Una carpeta llamada `poem-two`.
- Una carpeta llamada `tests`
- Un archivo `demo-poem.txt`.
- Un archivo `demo.js`.
- Un archivo `exercise-one.js`
- Un archivo `exercise-two.js`
- Un archivo `utils.js`
- Y el archivo **README.md** que ahora mismo estás leyendo. 😙

---

<br />

## **👩‍💻 EJERCICIO 1**

### **Poema uno**

📍 Dirígete al archivo `exercise-one.js`. Encontrarás las funciones "**problemA**, "**problemB**", "**problemC**", "**problemD**", "**problemE**","**problemF**", en este archivo. Trabajaremos en las seis.

📍 Dentro de cada función verás realizada la versión callback, si deskipeas los tests, estos pasarán, sin embargo el objetivo de la homework es pasar estas funciones callbacks a la versión promisificada, así que debes comentar la función callback para crear la promesa.

📍 Lo que hay que hacer:

1. Función problemA:

   a. Utiliza el método `promisifiedReadFile`, que se encuentra dentro del archivo **utils.js**, este método nos devuelve una promesa que a su vez nos entrega el contenido del archivo.

   b. El método **promisifiedReadFile** recibe como parámetro: la ruta donde se encuentra **stanza-01.txt**, recuerda que ésta se encuentra en la carpeta **poem-one**, por el momento ignora los errores.

   c. Luego, llama al método `.then`, el cual recibe como parámetro la función `blue` que se encuentra en el archivo **utils.js**.

2. Función problemB:

   a.Vuelve a utilizar el método **promisifiedReadFile** y pasa como parámetro la **stanza-02.txt** y a la **stanza-03.txt** que se encuentran dentro de la carpeta **poem-one**, por el momento ignora los errores.

   b.En cada una, llama el método **.then** que también recibe una respuesta que si resuelve llamamos nuevamente la función **blue**.

3. Función problemC:
   En este ejercicio el objetivo es leer y loguear del poema uno, la **stanza-02.txt** y después leer y loguear la **stanza-03.txt**, luego debes loguear 'done' cuando ambas promesas hayan terminado, ignora por este ejercicio los errores:

   a. Nuevamente utiliza el método **promisifiedReadFile**, el cual reciba como parámetro la **stanza-02.txt**.

   b. Llama el método **.then** que también recibe una respuesta, si resuelve llamamos la función **blue** y retornamos **promisifiedReadFile** para la **stanza-03.txt**.

   c. Vuelve a llamar el método **.then** que haga lo mismo que se realizó para la **stanza-02.txt**.

4. Función problemD:

   a.Vuelve a utilizar el método **promisifiedReadFile** y pasa como parámetro **poem-one/wrong-file-name.txt** que loguea el error o también puedes loguear **stanza-04.txt**.
   b.Sin embargo, ten en cuenta los dos caminos en esta promesa: si se resuelve, llama el método **.then** y con la respuesta llama la función **blue**.
   c. Si no se resuelve, llama el handleError que ejecute la función `magenta` la cual se encuentra en el archivo **utils.js**.

5. Función problemE:
   Teniendo de base los ejercicios anteriores, en esta función debes:

   a. Leer y loguear la **stanza-03.txt**

   b. Luego debe leer y la **stanza-04.txt**.

   c. Loguea un error si llegara a suceder para cualquiera de las dos promesas anteriores: **stanza-03.txt** y **stanza-04.txt**

   > Hint: Puedes usar el método `catch` que reciba la función magenta, la cual mostrará el error.

6. Función problemF:
   Teniendo de base los ejercicios anteriores, en esta función debes:

a. Leer y loguear la **stanza-03.txt**

b. Luego debe leer y la **stanza-04.txt**.

c. Loguea un error si llegara a suceder para cualquiera de las dos promesas anteriores: **stanza-03.txt** y **stanza-04.txt**.

d. En ambos caminos, tanto en la resolución de la promesa como en la rechazada debes loguear 'done' cuando haya terminado todo.

---

<br />

## **👩‍💻 EJERCICIO 2**

📍 Dirígete al archivo `commands/index.js`. Encontrarás las variables "**request**", "**process**" y "**fs**" importadas en este archivo. Trabajaremos con ambas.

📍 Lo que hay que hacer:

### **PWD**

1. Crea una función llamada `pwd`. Esta recibirá por parámetro el valor "print".
2. Utiliza la función `print`. Como argumento pásale el objeto `process` siendo ejecutado con el método **cwd**.

---

<br />

### **DATE**

1. Crea una función llamada `date`. Esta recibirá por parámetro el valor "print".
2. Utiliza la función `print`. Como argumento pásale la función `Date` siendo ejecutada.

---

<br />

### **ECHO**

1. Crea una función llamada `echo`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Utiliza la función `print`. Como argumento pásale la función el parámetro `args` aplicándole el siguiente método:

```javascript
args.join(" ");
```

---

<br />

### **LS**

1. Crea una función llamada `ls`. Esta recibirá por parámetro un valor: "print".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readdir(".", function (err, files) {
  if (err) throw err;
  print(files.join("\n"));
});
```

---

<br />

### **CAT**

1. Crea una función llamada `cat`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readFile(args[0], "utf-8", (err, data) => {
  if (err) throw err;
  print(data);
});
```

---

<br />

### **HEAD**

1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readFile(args[0], "utf-8", (err, data) => {
  if (err) throw err;
  print(data.split("\n").slice(0, 6).join("\n"));
});
```

---

<br />

### **TAIL**

1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readFile(args[0], "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  print(data.split("\n").slice(-5).join("\n"));
});
```

---

<br />

### **CURL**

1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Dentro de esta función pega el siguiente código:

```javascript
request(args[0], function (err, response, body) {
  if (err) {
    throw err;
  }
  print(body);
});
```

---

<br />

## **🔎 Recursos adicionales**

- Documentación [**VARIABLES GLOBALES DE NODE**](https://apuntes.de/nodejs-desarrollo-web/globals/#gsc.tab=0)
- Documentación [**VARIABLE GLOBAL PROCESS**](https://nodejs.org/docs/latest-v16.x/api/process.html)
- Documentación [**NODE**](https://nodejs.org/en/docs/)
- Documentación [**FILE SYSTEM**](https://nodejs.org/api/fs.html)

---

<br />

¡Listo! Aprendiste a crear los comandos más básicos de una terminal bash.
