import close from "../../assets/close.png";
import Messages from "../Messages/Messages";
import notFound from "../../assets/notFound.png";
import { useEffect, useState } from "react";
import NoteCard from "../Cards/NotesCard";
import { debounce } from "lodash";

// TODO add Local storage for search
function Search(props) {
  const [searchText, setSearch] = useState("");
  const [searchResult, setResult] = useState([]);
  const getNote = JSON.parse(localStorage.getItem("notes"));

  let debounceFunc = debounce((inputVal) => {
    const result = getNote.filter((item) => item.title.includes(inputVal));
    setResult(result);
  }, 500);

  useEffect(() => {
    if (searchText !== "") {
      debounceFunc(searchText);
    } else {
      setResult([]);
    }
  }, [searchText]);

  function handleClearInput() {
    setSearch("");
    setResult([]);
  }

  const goToNote = (noteId) => {
    props.note(noteId);
  };

  return (
    <div className="flex flex-col relative w-full h-screen px-4 py-5 ">
      <div className="flex w-full gap-2">
        <div className="flex p-2 h-fit w-full bg-secondary rounded-full items-center">
          <input
            className="w-11/12 px-4 bg-transparent focus:outline-none"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={searchText}
          />
          <img
            className="w-3 h-3"
            src={close}
            alt="close"
            onClick={handleClearInput}
          />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col items-center gap-4 p-4 ">
        {searchResult.length !== 0
          ? searchResult.map((item) => {
              return (
                <NoteCard
                  click={goToNote}
                  key={item.id}
                  noteId={item.id}
                  color={item.color}
                  title={item.title}
                />
              );
            })
          : // <Messages
            //   imgSrc={notFound}
            //   text="File not found. Try searching again."
            // ></Messages>
            null}
      </div>
    </div>
  );
}
export default Search;
