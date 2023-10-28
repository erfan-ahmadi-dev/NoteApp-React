function RoundedButton({ imgSrc, clickFunc }) {
  return (
    <img
      src={imgSrc}
      alt="button"
      className="p-2.5 w-10 h-10 rounded-xl bg-buttonsColor"
      onClick={clickFunc}
    />
  );
}
export default RoundedButton;
