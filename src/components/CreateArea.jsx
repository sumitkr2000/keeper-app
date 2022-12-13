import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    axios.post("https://apricot-cow-cape.cyclic.app/", note)
    .then(res => console.log(res.data));

    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [expand, setExpand] = useState(false);
  function handleClick() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
        />
        {
          <Zoom in={expand}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        }
      </form>
    </div>
  );
}

export default CreateArea;
