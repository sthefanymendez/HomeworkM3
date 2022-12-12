// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

let id = 0;

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (!author || !title || !contents)
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });

  const post = { id: ++id, author, title, contents };
  posts.push(post);
  res.status(201).json(post);
});

server.post("/posts/author/:author", (req, res) => {
  const { author } = req.params;
  const { title, contents } = req.body;
  if (!author || !title || !contents)
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  const post = { id: ++id, author, title, contents };
  posts.push(post);
  res.status(201).json(post);
});

server.get("/posts", (req, res) => {
  const { term } = req.query;
  if (term) {
    const filteredPosts = posts.filter(
      (post) => post.title.includes(term) || post.contents.includes(term)
    );
    res.status(200).json(filteredPosts);
  } else {
    res.status(200).json(posts);
  }
});

server.get("/posts/:author", (req, res) => {
  const { author } = req.params;
  const filteredPosts = posts.filter((post) => post.author === author);
  filteredPosts.length > 0
    ? res.status(200).json(filteredPosts)
    : res
        .status(404)
        .json({ error: "No existe ningun post del autor indicado" });
});

server.get("/posts/:author/:title", (req, res) => {
  const { author, title } = req.params;
  const filteredPosts = posts.filter(
    (post) => post.author === author && post.title === title
  );
  filteredPosts.length > 0
    ? res.status(200).json(filteredPosts)
    : res.status(404).json({
        error: "No existe ningun post con dicho titulo y autor indicado",
      });
});

server.put("/posts", (req, res) => {
  const { id, author, title, contents } = req.body;
  if (!id || !author || !title || !contents)
    res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    });
  const post = { id, author, title, contents };
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1)
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe ningun post con el id indicado" });
  posts[postIndex] = post;
  res.status(200).json(post);
});

server.delete("/posts", (req, res) => {
  const { id } = req.body;
  if (!id)
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se recibió el id del post a eliminar" });
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1)
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe ningun post con el id indicado" });
  //eliminamos del array de posts el post con el id indicado
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json({ success: true });
});

server.delete("/author", (req, res) => {
  const { author } = req.body;
  if (!author)
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se recibió el autor del post a eliminar" });
  const postIndex = posts.findIndex((post) => post.author === author);
  if (postIndex === -1)
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe ningun post con el autor indicado" });
  //eliminamos del array de posts TODOS los posts del autor indicado
  posts = posts.filter((post) => post.author !== author);
  res.status(200).json({ success: true });
});

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = server;
