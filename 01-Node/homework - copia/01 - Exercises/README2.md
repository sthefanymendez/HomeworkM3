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
args.join(' ');
```

---

<br />

### **LS**

1. Crea una función llamada `ls`. Esta recibirá por parámetro un valor: "print".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readdir('.', function (err, files) {
   if (err) throw err;
   print(files.join('\n'));
});
```

---

<br />

### **CAT**

1. Crea una función llamada `cat`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readFile(args[0], 'utf-8', (err, data) => {
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
fs.readFile(args[0], 'utf-8', (err, data) => {
   if (err) throw err;
   print(data.split('\n').slice(0, 6).join('\n'));
});
```

---

<br />

### **TAIL**

1. Crea una función llamada `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Dentro de esta función pega el siguiente código:

```javascript
fs.readFile(args[0], 'utf-8', (err, data) => {
   if (err) {
      throw err;
   }
   print(data.split('\n').slice(-5).join('\n'));
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

-  Documentación [**VARIABLES GLOBALES DE NODE**](https://apuntes.de/nodejs-desarrollo-web/globals/#gsc.tab=0)
-  Documentación [**VARIABLE GLOBAL PROCESS**](https://nodejs.org/docs/latest-v16.x/api/process.html)
-  Documentación [**NODE**](https://nodejs.org/en/docs/)
-  Documentación [**FILE SYSTEM**](https://nodejs.org/api/fs.html)

---

<br />

¡Listo! Aprendiste a crear los comandos más básicos de una terminal bash.
