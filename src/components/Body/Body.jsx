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
  const goToNote = (noteId) => {
    props.note(noteId);
  };
  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };
  const showModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const getData = JSON.parse(localStorage.getItem("notes")) || [];

  return (
    <div>
      <header className="headerStyle">
        <h1 className="w-3/4 font-semibold text-3xl">Notes</h1>
        <RoundedButton imgSrc={searchIcon} clickFunc={goToSearch} />
        <RoundedButton imgSrc={infoIcon} clickFunc={showModal} />
      </header>
      {/**/}
      <div className="noteListStyle ">
        {getData.length !== 0 ? (
          getData.map((item) => {
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
      <dialog
        id="my_modal_2"
        className={`modal place-content-center place-items-center bg-overlay max-w-full w-screen max-h-full h-screen`}
        onClick={closeModal}
      >
        <div className="modal-box fixed top-[35%] left-[4%] bg-primary rounded-3xl flex flex-col justify-between items-center w-11/12 h-1/4 text-[#CFCFCF] text-sm gap-4 p-5">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="">Designed by - Erfan</span>
            <span>app version - 1.0.0</span>
          </div>
          <span>Made by</span>
        </div>
      </dialog>
    </div>
  );
}
export default Body;
