import left from "../../assets/left.png";
import deleteicon from "../../assets/delete.svg";
import infoIcon from "../../assets/info.svg";
import RoundedButton from "../Buttons/RoundedButton";
function ViewNote(props) {
  // get Local Storage Data
  const getNote = JSON.parse(localStorage.getItem("notes"));
  // find card with id
  const foundItem = getNote.find((item) => item.id === props.noteId);

  const clickFunc = () => {
    props.main();
  };

  const deleteFunc = (e) => {
    e.preventDefault();
    const filteredData = getNote.filter((item) => item.id !== foundItem.id);

    localStorage.setItem("notes", JSON.stringify(filteredData));

    props.main();
  };
  const closeModal = () => {
    document.getElementById("my_modal_2").close();
  };
  const showModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className="w-full h-screen ">
      <header className="headerStyle">
        <RoundedButton imgSrc={left} clickFunc={clickFunc} />
        <RoundedButton imgSrc={deleteicon} clickFunc={showModal} />
      </header>
      <div className=" px-5 flex flex-col gap-4 max-w-full w-full overflow-hidden h-screen">
        <p className="titleStyle ">{foundItem.title}</p>
        <span className=" text-xl font-normal h-auto  ">
          {foundItem.description}
        </span>
      </div>

      <dialog
        id="my_modal_2"
        className={`modal place-content-center place-items-center bg-overlay max-w-full w-screen max-h-full h-screen`}
        onClick={closeModal}
      >
        <div className="modal-box fixed top-[35%] left-[4%] bg-primary rounded-3xl flex flex-col justify-between items-center w-11/12 h-1/4 text-[#CFCFCF] text-sm gap-4 p-5">
          <img className="w-[36px] h-[36px]" src={infoIcon} alt="" />
          <span className="">Are your sure you want delete?</span>
          <div className="modal-action w-full">
            <form
              method="dialog"
              className="w-full flex justify-around"
              onSubmit={deleteFunc}
            >
              <button
                type="submit"
                className="bg-[#F00]  w-1/3  rounded-[5px] text-[#FFF] text[18px] py-2 "
              >
                Delete
              </button>
              <button className="bg-[#30BE71] w-1/3  rounded-[5px] text-[#FFF] text[18px] py-2">
                Keep
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
export default ViewNote;
