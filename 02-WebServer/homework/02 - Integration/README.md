# HW 02: WebServer | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **😛 Rick & Morty App**

### **📌 INTRO**

Hasta el momento hemos trabajado en nuestra app Rick and Morty en el lado frontend. A partir de ahora continuaremos con nuestra app desde el lado backend.

En esta homework, vamos a estructurar nuestro proyecto, crear nuestro primer server y conectar front con back.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Estructuración de Proyecto**

1. Para esto, dirígete al directorio donde guardes el proyecto `Rick & Morty` y ábrelo en tu VSC.

2. En la raíz de tu proyecto crea una carpeta llamada `front`.

3. Todo el contenido trabajado durante el módulo 2, guárdalo dentro de la carpeta **front**

4. Crea una segunda carpeta al mismo nivel con el nombre `back`.

<br />

---

### **👩‍💻 EJERCICIO 2**

### **Crea tu primer server**

Crea la ruta `rickandmorty` en la que, basados en el archivo `data.js`, obtenga el personaje por id.

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Conectar front - back**

1. Abre tu proyecto en la carpeta **front** para poder hacer un pequeño cambio.

2. Dentro del archivo **app.js** tienes una función llamada `onSearch`. La URL a la que le haces la petición es

En el archivo App.js, donde tienes dentro de la función **onSearch**, cambia la ruta get que actualmente llama **https://rickandmortyapi.com/api/character/**. Tienes que reemplazarla por esta nueva URL: ` http://localhost:3001/rickandmorty`.

> **[NOTA]:** recuerda agregar a la ruta el id.

<br />

---

### **👩‍💻 EJERCICIO 4**

Dentro de tu carpeta **back** debes crear una nueva carpeta con el nombre **src**. Dentro de esta carpeta, a su vez, deberás crear:

- Un archivo llamado `app.js`.
- Una carpeta llamada `controllers`.
- Una carpeta llamada `routes`.
- Una carpeta llamada `utils`.

</br >

---

### **👩‍💻 EJERCICIO 5**

En la carpeta raíz de tu Back-End tendrás que ejecutar el comando:

```bash
    npm init
```

De esta manera crearás un archivo `package.json`.

En este sólo deberás instalarle las librerías **axios** y **nodemon** de la siguiente manera:

```bash
    npm install axios nodemon
```

Una vez hecho esto, dentro del objeto **scripts** tienes que dejar el script **`start`** de la siguiente manera:

```javascript
    "start": "nodemon ./src/routes/server.js",
```

</br >

---

Hemos terminado por ahora!! 🥳 más adelante crearemos más rutas para nuestro frontend. 🚀
