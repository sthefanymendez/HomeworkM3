# **💪 HW6 | Async Await - Integration**

## **🕒 DURACIÓN ESTIMADA**

XX minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRODUCCIÓN**

En esta homework vamos a continuar trabajando sobre las rutas que construimos en la homework anterior:

-  **`GET` getCharById**
-  **`GET` login**
-  **`POST` postFav**
-  **`DELETE` deleteFav**

Nuestro objetivo será transformar todas las funciones que utilicen promesas, en funciones gestionadas por **`async await`**.

🤓 ¿Preparad@? 🤓

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | GET getCharById**

Dirígete a tu carpeta **`controllers`** y modifica la función **`getCharById`** de modo tal que utilices **async/await** y no promesas.

2. Para manejar correctamente el error envuelve el contenido de esta función en un **try-catch**.

<br />

---

### **👩‍💻 EJERCICIO 2 | GET login**

Dirígete a tu carpeta **`controllers`** y modifica la función **`login`** de modo tal que utilices **async/await** y no promesas.

2. Para manejar correctamente el error envuelve el contenido de esta función en un **try-catch**.

<br />

---

### **👩‍💻 EJERCICIO 3 | POST postFav**

Dirígete a tu carpeta **`controllers`** y modifica la función **`postFav`** de modo tal que utilices **async/await** y no promesas.

2. Para manejar correctamente el error envuelve el contenido de esta función en un **try-catch**.

<br />

---

### **👩‍💻 EJERCICIO 4 | DELETE deleteFav**

Dirígete a tu carpeta **`controllers`** y modifica la función **`deleteFav`** de modo tal que utilices **async/await** y no promesas.

2. Para manejar correctamente el error envuelve el contenido de esta función en un **try-catch**.

<br />

---

### **👀 COMPROBEMOS...**

Levanta el servidor y tu proyecto Front-End. Revisa que todo aún funcione correctamente:

1. Que puedas traer cualquier personaje por su **id** desde la Search Bar.
2. Que puedas ingresar al detalle de cualquier personaje que hayas encontrado.
3. Que puedas agregar todos los personajes que quieras a tus favoritos.
4. Que puedas eliminar a todos los personajes que quieras de tus favoritos.

</br >

---

## **📌 EXTRA CREDIT**

Ahora te desafiamos a que transformes las siguientes funciones de tu front en a **`async await`**:

1. **`App.js`**: en este archivo deberás transformar dos funciones:

   -  **onSearch**
   -  **login**

2. **`/redux/actions.js`**: en este archivo deberás transformar dos funciones:

   -  **addFav**
   -  **removeFav**

3. **`/components/Detail.jsx`**: aquí solo debes transformar:

   -  **useEffect**.
