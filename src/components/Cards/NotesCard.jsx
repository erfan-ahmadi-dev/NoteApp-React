function NoteCard(props) {
  const getData = () => {
    props.click(props.noteId);
  };

  return (
    <div
      className={`w-full h-auto py-4 px-8 text-black ${props.color} rounded-lg`}
      onClick={getData}
    >
      <span className="text-2xl font-normal">{props.title}</span>
    </div>
  );
}
export default NoteCard;
