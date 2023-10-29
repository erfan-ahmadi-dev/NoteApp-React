import RoundedButton from "../Buttons/RoundedButton";
import left from "../../assets/left.png";
import save from "../../assets/save.png";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// TODO add Local Storage to Save note
function AddNote(props) {
  let [noteNum, setNumId] = useState(0);
  const colorsArr = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
  ];
  let randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
  const [titleText, setTitle] = useState();
  const [descriptionText, setDescription] = useState("");
  const backToMain = () => {
    props.main();
  };

  const handleValidation = (e) => {
    e.preventDefault();
    if (titleText !== "") {
      const storedData = JSON.parse(localStorage.getItem("notes")) || [];

      const newNote = {
        id: uuidv4(),
        title: titleText,
        description: descriptionText,
        color: randomColor,
      };
      setNumId(noteNum++);
      console.log(noteNum);
      storedData.push(newNote);

      const get = localStorage.setItem("notes", JSON.stringify(storedData));
      console.log(storedData);
      props.main();
    } else {
      alert("❌Title is required❌");
    }
  };

  return (
    <div className="w-full h-screen ">
      <header className="flex w-full gap-3 p-5 items-center h-[15%] justify-between">
        <RoundedButton imgSrc={left} clickFunc={backToMain} />
        <RoundedButton imgSrc={save} clickFunc={handleValidation} />
      </header>
      <form className=" px-5 flex flex-col gap-4">
        <input
          className="focus:outline-none bg-transparent text-5xl font-normal "
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <textarea
          rows="18"
          type="text"
          placeholder="Type something..."
          className="focus:outline-none bg-transparent text-xl font-normal resize-none "
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
export default AddNote;
