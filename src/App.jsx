import "./App.css";
// import Body from "./components/Body/Body";
import Messages from "./components/Messages/Messages";
import empty from "./assets/emptyNote.png";

import Body from "./components/Body/Body";
import Search from "./components/Body/Search";
import AddNote from "./components/Body/AddNote";
import ViewNote from "./components/Body/ViewNote";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("main");
  const [noteIdToView, setNoteIdToView] = useState();
  // const [noteColor, setColor] = useState();
  const changtoView = (noteId) => {
    setPage("view");
    setNoteIdToView(noteId);
    // setColor(color);
  };
  const changtoMain = () => setPage("main");
  const changtoSearch = () => setPage("search");
  const changtoAdd = () => setPage("addNew");

  function detectPage() {
    if (page === "main") {
      return (
        <Body addNew={changtoAdd} search={changtoSearch} note={changtoView} />
      );
    } else if (page === "view") {
      return <ViewNote main={changtoMain} noteId={noteIdToView} />;
    } else if (page === "addNew") {
      return <AddNote main={changtoMain} />;
    } else if (page === "search") {
      return <Search note={changtoView} />;
    }
  }

  return <div className="relative h-screen">{detectPage()}</div>;
}

export default App;
