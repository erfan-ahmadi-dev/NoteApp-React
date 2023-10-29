import NoteCard from "../Cards/NotesCard";
import addIcon from "../../assets/add.png";
import infoIcon from "../../assets/info.png";
import searchIcon from "../../assets/search.png";
import RoundedButton from "../Buttons/RoundedButton";
import Messages from "../Messages/Messages";
import emptyIcon from "../../assets/emptyNote.png";

function Body(props) {
  // const dummy = [
  //   { id: 0, title: "test", description: "test", color: "bg-red-500" },
  //   { id: 1, title: "test", description: "test", color: "bg-green-500" },
  //   { id: 2, title: "ali", description: "for hastan", color: "bg-blue-500" },
  // ];

  const addNewNote = () => {
    props.addNew();
  };
  const goToSearch = () => {
    props.search();
  };
  const goToNote = (noteId, color) => {
    props.note(noteId, color);
  };

  const getData = JSON.parse(localStorage.getItem("notes")) || [];

  return (
    <div>
      <header className="flex w-full gap-3 p-5 items-center h-[15%] justify-between">
        <h1 className="w-3/4 font-semibold text-3xl">Notes</h1>
        <RoundedButton imgSrc={searchIcon} clickFunc={goToSearch} />
        <RoundedButton imgSrc={infoIcon} />
      </header>
      {/**/}
      <div className="w-full h-screen flex flex-col items-center gap-4 p-4 ">
        {getData.length !== 0 ? (
          getData.map((item) => {
            return (
              <NoteCard
                title={item.title}
                click={goToNote}
                key={item.id}
                noteId={item.id}
                color={item.color}
              />
            );
          })
        ) : (
          <Messages
            imgSrc={emptyIcon}
            text="Create your first note !"
          ></Messages>
        )}
      </div>
      <img
        src={addIcon}
        alt="button"
        className="p-2.5 w-10 h-10 rounded-full drop-shadow-floatShadow absolute bg-primary bottom-4 right-4"
        onClick={addNewNote}
      />
    </div>
  );
}
export default Body;
