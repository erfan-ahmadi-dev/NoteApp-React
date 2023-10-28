import add from "../../assets/add.png";
function FloatButton(clickFunc) {
  return (
    <img
      src={add}
      alt="button"
      className="p-2.5 w-10 h-10 rounded-full drop-shadow-floatShadow absolute bg-primary bottom-4 right-4"
      //   onClick={clickFunc}
    />
  );
}
export default FloatButton;
