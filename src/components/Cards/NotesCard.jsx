function NoteCard({ title }) {
  const colorsArr = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
  ];
  let randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];

  return (
    <div
      className={`w-full h-auto py-4 px-8 text-black ${randomColor} rounded-lg`}
    >
      <span className="text-2xl font-normal">{title}</span>
    </div>
  );
}
export default NoteCard;
