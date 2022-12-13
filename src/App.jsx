import axios from "axios";
import { useEffect, useState } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  useEffect(() => {
    axios
      .get("https://apricot-cow-cape.cyclic.app/")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  });

  function deleteNote(id) {
    axios
      .delete(`https://apricot-cow-cape.cyclic.app/${id}`)
      .then((res) => console.log(res.data));
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note._id !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note._id}
            _id={note._id}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
