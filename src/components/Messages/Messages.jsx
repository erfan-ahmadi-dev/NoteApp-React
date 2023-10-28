function Messages({ imgSrc, text }) {
  return (
    <div className="w-full  flex flex-col justify-center items-center px-8 absolute top-[30%]">
      <img src={imgSrc} alt="Warning" />
      <span className="font-light text-lg ">{text}</span>
    </div>
  );
}

export default Messages;
