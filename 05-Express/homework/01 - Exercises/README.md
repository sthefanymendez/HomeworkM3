# HW 05: Express | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework vas a desarrollar una API que permitirá gestionar POST's, utilizando el concepto CRUD similar a un gestor de publicaciones de cualquier red social conocida, vas a realizar las siguientes acciones:

-  Crear nuevos Posts
-  Consultar Posts existentes
-  Actualizar Posts existentes
-  Eliminar Posts existentes

---

<br />

## **📍 CONSIGNA**

En esta homework debes generar una API para gestionar Posts, como no trabajarás con una base de datos, simularemos una en el que los datos serán almacenados en memoria utilizando un array de Javascript denominado `posts`.

Cada `Post` debe ser un objeto con la siguiente estructura:

```js
{
  author: "Autor del Post"
  title: "Titulo del Post",
  contents: "Contenido del Post"
}
```

Tanto `author` como `title` y `contents` van a ser del tipo String.

Desarrollar las rutas `POST`, `GET`, `PUT` y `DELETE` dentro del archivo `server.js` que se encuentra dentro de la carpeta `src`.

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

🔹 Para correr el servidor y que automáticamente se restaure si realizamos algún cambio debes ejecutar `npm run nodemon`.

```bash
npm run nodemon
```

🔹 Una vez esté todo configurado puedes hacer los requests a `http://localhost:3000` que es la URL donde correrá nuestro servidor.

---

<br />

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta llamada `img`.
-  Una carpeta llamada **src**.
-  Un archivo `package.json`
-  Y el archivo **README.md** que ahora mismo estás leyendo. 😙

🔹 Dentro de la carpeta `src`, vas a encontrar la siguiente estructura:

-  Un archivo llamado `app.js`
-  Un archivo llamado **server.js**

---

<br />

## **👩‍💻 Repaso de creación de rutas**

Básicamente, la creación de rutas sirve para determinar cómo una aplicación responde a la solicitud de un cliente en una determinada vía de acceso (llamada URI) con un método de solicitud HTTP específico. En otras palabras, lo que vamos a hacer es invocar uno de estos métodos HTTP (especialmente POST, GET, PUT, HEAD y DELETE), utilizando la variable app, para indicarle la acción que queremos realizar y disponer la ruta que queremos para una determinada URI.

Es por esto que la definición de creación de rutas es la siguiente:

```javascript
server.METHOD(PATH, HANDLER);
```

Donde:

-  server es una instancia de express
-  METHOD es un método de solicitud HTTP
-  PATH es la vía de acceso al servidor
-  HANDLER es la función que se ejecuta cuando se hace el direccionamiento a la ruta, siempre recibe como parámetro dos variables, req por request y res por response.

Veamos ahora un ejemplo más concreto. El método GET se utiliza para leer la representación de un resource, que puede estar en distintos formatos tales como una imagen, un JSON, un XML, etc. Por lo que utilizando nuestra instancia de express vamos a invocar a get indicando la ruta que queremos para `'/'` y mandar una response con un "Hola mundo!" como texto.

```javascript
server.get('/', function (req, res) {
   //Ruta para un GET a /
   res.send('Hola mundo!'); // response "Hola mundo!" en la pagina principal
});
```

Si en lugar de texto queremos que se envíe con el formato JSON podríamos hacer lo siguiente:

```javascript
server.get('/', function (req, res) {
   var obj = {
      saludo: 'Hola mundo!',
   };
   res.json(obj);
});
```

Ahora supongamos que queremos setear el status de la response como 200 para indicar que la solicitud ha tenido éxito, para eso utilizaremos `res.status()`.

```javascript
server.get('/', function (req, res) {
   res.status(200).send('Hola mundo!');
});
```

Otro punto a tener en cuenta es que `req.body` se usa para tener los parámetros que son enviados por el cliente como parte de un request. Entonces, si por ejemplo quisiera acceder a la propiedad name podría utilizar `req.body.name`.

```javascript
server.get('/', function (req, res) {
   var obj = {
      saludo: 'Hola' + req.body.name,
   };
   res.json(obj);
});
```

Para finalizar si queremos acceder a los parámetros de una consulta utilizaremos `req.query`. Por ejemplo, supongamos que se desea buscar 'toni' realizando un `GET /search?name=toni`, entonces lo que haremos será acceder al parámetro nombre de la query con `req.query.name`.

---

<br />

## **👩‍💻 EJERCICIO 1**

### **POST** ruta **/posts**

📍 Dirígete al archivo `server.js`, es el archivo donde desarrollaremos la homework.

📍 Crea la ruta `/posts` cuando se ejecute un request con el método **POST**.

📍 Lo que hay que hacer:

1. Asegurarse que dentro del body del request existan `author`, `title` y `contents`.

2. En el caso de que alguno de ellos no se encuentre, devolver un JSON con un objeto de la forma `{error: "No se recibieron los parámetros necesarios para crear el Post"}`.

   > Hint: Verifica que el código de error sea el adecuado.

3. Si los tres campos fueron provistos, crear un nuevo objeto Post con los valores indicados para `author`, `title` y `contents` y asignándole un valor numérico único como propiedad `id`.
4. Agregar dicho objeto al array de posts. Devolver un JSON con el objeto recientemente creado.

---

<br />

## **👩‍💻 EJERCICIO 2**

### **POST** ruta **/posts/author/:author**

📍 Crea la ruta `/posts/author/:author` cuando se ejecute un request con el método **POST**.

📍 Lo que hay que hacer:

1. Asegurarse que dentro del body del request existan tanto `title` como `contents`.

2. Por parámetros viaja el nombre del autor. En el caso de que alguno de ellos no se encuentre, devolver un JSON con un objeto de la forma `{error: "No se recibieron los parámetros necesarios para crear el Post"}`.

   > Hint: Verifica que el código de error sea el adecuado.

3. Si los tres campos fueron provistos, crear un nuevo objeto Post con los valores indicados para `author`, `title` y `contents` y asignándole un valor numérico único como propiedad `id`.

4. Agregar dicho objeto al array de posts. Devolver un JSON con el objeto recientemente creado.

---

<br />

## **👩‍💻 EJERCICIO 3**

### **GET** ruta **/posts**

📍 Cuando se ejecute un request con el método **GET** en la ruta `/posts`.

📍 Lo que hay que hacer:

1. Si existe el parámetro `term` dentro de la URL (query-string parameter) devolver aquellos Posts que contengan el valor del parámetro `term` en su título o en su contenido (o en ambos).

2. Caso contrario, devolver todos los Posts que se encuentren almacenados en el array `posts`.

---

<br />

## **👩‍💻 EJERCICIO 4**

### **GET** ruta **/posts/:author**

📍 Cuando se ejecute un request con el método **GET** en la ruta `/posts/:author`.

📍 Lo que hay que hacer:

1. Si existen Posts del autor indicado en el parámetro `author`, devolverlos.

2. Caso contrario, devolver un JSON con un objeto de la forma `{error: "No existe ningun post del autor indicado"}`.

   > Hint: Verifica que el código de error sea el adecuado.

---

<br />

## **👩‍💻 EJERCICIO 5**

### **GET** ruta **/posts/:author/:title**

📍 Cuando se ejecute un request con el método **GET** en la ruta `/posts/:author/:title`.

📍 Lo que hay que hacer:

1. Si existen Posts que coincidan con ambos parámetros, `author` y `title`, devolver aquellos Posts que correspondan con la información provista, es decir que coincidan `author` y `title`.

2. Caso contrario, devolver un JSON con un objeto de la forma `{error: "No existe ningun post con dicho titulo y autor indicado"}`.

   > Hint: Verifica que el código de error sea el adecuado.

---

<br />

## **👩‍💻 EJERCICIO 6**

### **PUT** ruta **/posts**

📍 Cuando se ejecute un request con el método **PUT** en la ruta `/posts`.

📍 Lo que hay que hacer:

1. Asegurarse que dentro del body del request existan `id`, `title` y `contents`.

2. En el caso de que alguno de ellos no se encuentre, devolver un JSON con un objeto de la forma `{error: "No se recibieron los parámetros necesarios para modificar el Post"}`.

   > Hint: Verifica que el código de error sea el adecuado.

3. En el caso de que el `id` no corresponda a un post válido existente, devolver un JSON similar al anterior modificando el mensaje de error por uno adecuado para este caso.

4. Si se encuentran todos los parámetros y el `id` es válido, actualizar los datos del `title` y `contents` del Post que coincida con dicho `id` . Devolver un JSON con el objeto recientemente actualizado.

---

<br />

## **👩‍💻 EJERCICIO 7**

### **DELETE** ruta **/posts**

📍 Cuando se ejecute un request con el método **DELETE** en la ruta `/posts`.

📍 Lo que hay que hacer:

1. Asegurarse que dentro del body del request exista un `id` correspondiente a un Post válido. De no ser así, ya sea por falta del campo `id` o por ser un id inválido, devolver un JSON con un objeto con un mensaje correspondiente en cada caso manteniendo la forma de siempre: `{error: "Mensaje de error"}`.

2. En el caso de que el `id` corresponda a un Post válido, eliminarlo del array de Posts y devolver un JSON con el siguiente objeto: `{ success: true }`.

3. En el caso de que el `id` no corresponda a un post válido existente, devolver un JSON similar al anterior modificando el mensaje de error por uno adecuado para este caso.

> Hint: Ver qué método vas a utilizar para eliminar un post, dependiendo el caso puede que sea necesario modificar el `const posts = []` del comienzo por `let posts = []`

---

<br />

## **👩‍💻 EJERCICIO 8**

### **DELETE** ruta **/author**

📍 Cuando se ejecute un request con el método **DELETE** en la ruta `/author`.

📍 Lo que hay que hacer:

1. Asegurarse que dentro del body del request exista un `author` correspondiente a un autor válido. De no ser así, ya sea por falta del campo `author` o por ser un autor inválido, devolver un JSON con un objeto con un mensaje correspondiente en cada caso manteniendo la forma de siempre: `{error: "Mensaje de error"}`.

2. En el caso de que el `author` corresponda a un autor válido, eliminar del array de Posts todos los Post correspondientes a dicho autor y devolver los posts eliminados.

3. En el caso de que el `id` no corresponda a un post válido existente, devolver un JSON similar al anterior modificando el mensaje de error por uno adecuado para este caso.

---

<br />

## **👩‍💻 EJERCICIO 9**

### **POSTMAN**

📍 Instalación de Postman

Pueden descargar Postman para el sistema operativo que tengan desde aca: https://www.postman.com/downloads/

📍 Lo que hay que hacer:

Una vez instalado podrán acceder a la siguiente pantalla principal de Postman:

<p align="center">
  <img src="./img/pantalla-inicial.png" alt="Img" />
</p>

1. Crear una nueva `Collection` para agrupar allí todos los request que vayamos a hacer para este proyecto. Para eso clickear en el botón `New`, luego seleccionar `Collection` y darle un nombre a la misma.

<p align="center">
  <img src="./img/new-collection.png" alt="Img" />
</p>

2. Crear un nuevo `Request`, darle un nombre y seleccionar la colección creada anteriormente para agrupar todos los Request allí:

<p align="center">
  <img src="./img/new-request.png" alt="Img" />
</p>

3. Ahora en la parte del recuadro rojo tendremos que:

   -  Indicar qué tipo de Request queremos:

      -  GET
      -  POST
      -  PUT
      -  DELETE

   -  La URL sobre la cual vamos a realizar el request (En este caso será http://localhost:3000/)

-  Incluir los `Params` o el `Body` dependiendo del tipo de Request que hagamos:

   <p align="center">
     <img src="./img/request-general.png" alt="Img" />
   </p>

Video demostrativo de cómo se utiliza y funcionan algunos request básicos de Postman:

  <p align="center">
    <img src="./img/video-request.gif" alt="Img" />
  </p>

---

<br />

## **🧠 Recuerda que...**

-  Las rutas son los endpoints definidos en nuestro servidor que realizan solicitudes del cliente.

-  Middleware son funciones que determinan el flujo solicitud-respuesta. Los middleware se ejecutan después de cada solicitud entrante.

-  La función que inicia nuestro servidor es app.listen().

-  Cuando una aplicación de nuestro lado (del servidor) responde a una solicitud de cliente (frontend) a un endpoint específico es lo que conocemos como routing. El endpoint está compuesto de un URI y un método HTTP (GET, POST, PUT, DELETE).

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**Express**](http://expressjs.com/es/)

-  Info adicional [**Express**](https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction)

-  ¿Sabes cuáles son los singificados del [**status**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) de las respuestas HTTP?

---

<br />

¡Listo! Aprendiste a desarrollar una API que gestiona POST's, utilizando los métodos HTTP!!!😎 creaste algo similar a un gestor de publicaciones de cualquier red social conocida. ✨🚀

Dirígete a la carpeta 📂 "02 - Integration" y continúa desarrollando la app de Rick & Morty 🤩 ---
