const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
  app.get("/api/authors/", AuthorController.findAllauthors);
  app.get("/api/authors/:id", AuthorController.findOneSingleAuthor);
  app.post("/api/authors/new", AuthorController.createNewAuthor);
  app.put("/api/authors/update/:id", AuthorController.updateExistingAuthor);
  app.delete("/api/authors/delete/:id", AuthorController.deleteAnExistingAuthor);
};