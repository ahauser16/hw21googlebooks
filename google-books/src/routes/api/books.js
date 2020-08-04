const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// 6. Add the following Express routes for your app:

// * `/api/books` (get) - Should return all saved books as JSON.

// * `/api/books` (post) - Will be used to save a new book to the database.

// Matches with "/api/books"
router.route("/")

  .get(bookController.findAll)
  // findAll: function(req, res) {
  //   db.Book.find(req.query)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  //=========


  
  .post(bookController.create);
  // create: function(req, res) {
  //   db.Book.create(req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },
  //=========




  // Matches with "/api/books/:id"

router
  .route("/:id")


  // * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.
  .get(bookController.findById)
  // findById: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },

  .put(bookController.update)
  // update: function(req, res) {
  //   db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // },


  // * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
  .delete(bookController.remove);
  // remove: function(req, res) {
  //   db.Book.findById(req.params.id)
  //     .then(dbBook => dbBook.remove())
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err));
  // }
module.exports = router;
