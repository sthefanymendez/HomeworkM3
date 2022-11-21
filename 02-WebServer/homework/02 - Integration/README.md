# HW 02: WebServer | Integración

## **Duración estimada 🕒**

x minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

Hasta el momento hemos trabajado en nuestra app Rick and Morty en el lado frontend. A partir de ahora continuaremos con nuestra app desde el lado backend.

En esta homework, vamos a estructurar nuestro proyecto, crear nuestro primer server y conectar front con back.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Estructuración de Proyecto**

1. Para ello, dirígete a tu carpeta donde está el proyecto `Rick & Morty` y ábrela.

2. En la raíz de tu proyecto crea una carpeta llamada `front`.

3. Todo el contenido trabajado durante el módulo 2, guárdalo dentro de la carpeta **front**

4. Crea una segunda carpeta al mismo nivel de front, llamada `back`.

<br />

---

### **👩‍💻 EJERCICIO 2**

### **Crea tu primer server**

Crea la ruta `rickandmorty`en el que basados en el archivo `data.js` obtenga el personaje por id.

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Conectar front - back**

1. Abre tu proyecto en **front** para poder hacer un pequeño cambio.

2. En el archivo App.js, donde tienes dentro de la función **onSearch**, cambia la ruta get que actualmente llama a la ruta **https://rickandmortyapi.com/api/character/** que está en este momento por esta: ` http://localhost:3001/rickandmorty`

> Hint: recuerda agregar a la ruta el id.

<br />

---

Hemos terminado por ahora!! 🥳 más adelante crearemos más rutas para nuestro frontend. 🚀
