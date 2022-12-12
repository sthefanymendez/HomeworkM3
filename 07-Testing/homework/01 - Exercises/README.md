# HW 02: WEB SERVER | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework crearás un servidor básico con distintas rutas que cumplirán funcionalidades específicas.

---

<br />

## **📖 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **✅ Pasos básicos para realizar la homework**

Para iniciar, debes pararte sobre la carpeta **`01 - Excercises`**. Dentro de ella escribe el comando:

```bash
npm install
npm test
```

---

<br />

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta **excercices**.
   -  Un archivo **.js** que contendrá funciones.
   -  Un archivo **.test.js** en el que deberás escribir los test correspondientes.
-  Un archivo **package.json**.
-  Un archivo **README.md**.

---

<br />

## **📋 INSTRUCCIONES**

Dentro del archivo **`exercises/exercices.js`** encontrarás una serie de funciones. Tu tarea es crear una descripción y el testing para cada una de estas funciones. Una vez que termines el test, verifica que funcione correctamente con el comando:

```bash
   npm test
```

Recuerda que deberás ejecutar las funciones pasándoles un valor para poder testearlas.

## **👩‍💻 EJERCICIO 1**

### **multiplicar**

1. Dirígete al archivo **`exercises/exercices.js`** y observa la función llamada **multiplicar**.

2. Ahora dirígete al archivo **`exercises/exercices.test.js`**

   -  Crea la descripción del ejercicio (puede ser el nombre del mismo, o algún título).

   -  Tienes que validar:
      -  Si esta función devuelve un número tres veces mayor del que le ingresas como argumento.

---

<br />

## **👩‍💻 EJERCICIO 2**

### **nuevaPropiedad**

1. Dirígete al archivo **`exercises/exercices.js`** y observa la función llamada **nuevaPropiedad**.

2. Ahora dirígete al archivo **`exercises/exercices.test.js`**

   -  Crea la descripción del ejercicio (puede ser el nombre del mismo, o algún título).

   -  Tienes que validar:
      -  Que la función devuelva el mismo objeto con una nueva propiedad llamada "_nuevaPropiedad_".
      -  Que esta propiedad sea igual al string "_Nuevo valor_".

---

<br />

## **👩‍💻 EJERCICIO 3**

### **returnTruth**

1. Dirígete al archivo **`exercises/exercices.js`** y observa la función llamada **returnTruth**.

2. Ahora dirígete al archivo **`exercises/exercices.test.js`**

   -  Crea la descripción del ejercicio (puede ser el nombre del mismo, o algún título).

   -  Tienes que validar:
      -  Si la función recibe cualquier valor que no sea un boolano debe devolver el string "_No es booleano_".
      -  Si la función recibe **true** debe devovler el string "_Verdadero_". Caso contrario el string "_Falso_".

---

<br />

## **👩‍💻 EJERCICIO 4**

### **nuevaFrase**

1. Dirígete al archivo **`exercises/exercices.js`** y observa la función llamada **nuevaFrase**.

2. Ahora dirígete al archivo **`exercises/exercices.test.js`**

   -  Crea la descripción del ejercicio (puede ser el nombre del mismo, o algún título).

   -  Tienes que validar:
      -  Ingresando un **nombre**, **apellido** y **edad**, la función debe retornar el string: _Hola! Mi nombre es **nombre** **apellido**. Tengo **edad** años._

---

<br />

## **👩‍💻 EJERCICIO 5**

### **nuevoArreglo**

1. Dirígete al archivo **`exercises/exercices.js`** y observa la función llamada **nuevoArreglo**.

2. Ahora dirígete al archivo **`exercises/exercices.test.js`**

   -  Crea la descripción del ejercicio (puede ser el nombre del mismo, o algún título).

   -  Tienes que validar:
      -  Si ingresas un número mayor a 10 debe devolver un arreglo que contenga el string "_**Es mayor**_". Caso contrario, el string "_**Es menor**_".

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**MATCHERS FROM JEST**](https://jestjs.io/docs/using-matchers)

---

<br />

¡Listo! Aprendiste a utilizar las funciónes básicas que nos provee **jest** para testear funciones en JavaScript.
