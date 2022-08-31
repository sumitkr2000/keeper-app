const router = require("express").Router();
let Note = require("../models/note.model");

router.route("/").get((req, res) => {
  Note.find()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(400).json("Error: ") + err);
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newnote = new Note({
    title,
    content,
  });

  newnote
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
