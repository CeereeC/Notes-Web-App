//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const path = __dirname + "/views/build/";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path));

const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//Items Schema

const noteSchema = {
  title: String,
  content: String,
};

const Note = mongoose.model("notes", noteSchema);

//Methods

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.get("/notes", function (req, res) {
  console.log("Server connected to Client");
  Note.find({}, (err, notes) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ notes: notes });
      console.log(notes);
    }
  });
});

app.post("/", (req, res) => {
  console.log("Received addNote from Client");
  const note = req.body;
  const newNote = new Note({
    title: note.title,
    content: note.content,
  });
  newNote.save();
  res.json({ msg: "success", noteAdded: newNote });
});

app.post("/delete", (req, res) => {
  console.log("Received deleteNote from Client");
  const noteID = req.body.id;
  Note.findByIdAndRemove(noteID, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted");
      res.json({ msg: "success" });
    }
  });
});

let port = process.env.PORT;
if (port === null || port === "") {
  port = 8080;
}

app.listen(port, function () {
  console.log("Server started");
});
