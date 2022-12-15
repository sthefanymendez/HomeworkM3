// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let publications = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

let id = 0;

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (!author || !title || !contents)
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });

  const post = { id: ++id, author, title, contents };
  publications.push(post);
  res.status(201).json(post);
});

server.get("/posts", (req, res) => {
  const { term, author, title } = req.query;
  if (term) {
    const filteredPosts = publications.filter(
      (post) => post.title.includes(term) || post.contents.includes(term)
    );
    filteredPosts.length > 0
      ? res.status(200).json(filteredPosts)
      : res.status(200).json(publications);
  } else if (author && title) {
    const filteredPosts = publications.filter(
      (post) => post.author === author && post.title === title
    );
    filteredPosts.length > 0
      ? res.status(200).json(filteredPosts)
      : res.status(404).json({
          error:
            "No existe ninguna publicación con dicho título y autor indicado",
        });
  } else {
    return res.status(200).json(publications);
  }
});

server.get("/posts/:author", (req, res) => {
  const { author } = req.params;
  const filteredPosts = publications.filter((post) => post.author === author);
  filteredPosts.length > 0
    ? res.status(200).json(filteredPosts)
    : res
        .status(404)
        .json({ error: "No existe ningun post del autor indicado" });
});

server.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, contents } = req.body;
  if (!title || !contents)
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar la publicación",
    });
  const postIndex = publications.findIndex((post) => post.id === Number(id));
  if (postIndex === -1)
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibió el id correcto necesario para modificar la publicación",
    });
  const post = { ...publications[postIndex], title, contents };
  publications[postIndex] = post;
  res.status(200).json(post);
});

server.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se recibió el id de la publicación a eliminar" });
  }
  const postIndex = publications.findIndex((post) => post.id === Number(id));
  if (postIndex === -1)
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibió el id correcto necesario para eliminar la publicación",
    });
  publications = publications.filter((post) => post.id !== Number(id));
  res.status(200).json({ success: true });
});

server.delete("/author/:name", (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se recibió el nombre del autor a eliminar" });
  }
  const postIndex = publications.findIndex((post) => post.author === name);
  if (postIndex === -1)
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibió el nombre correcto necesario para eliminar las publicaciones del autor",
    });
  publications = publications.filter((post) => post.author === name);
  res.status(200).json(publications);
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
