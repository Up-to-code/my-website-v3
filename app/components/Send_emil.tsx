function Send_emil() {
  return (
    <div className="w-[400px] mt-10">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="first name"
          className="outline-none bg-neutral-950 py-1 px-2 w-[150px] "
        />
        <input
          type="text"
          placeholder="Last name"
          className="outline-none bg-neutral-950 py-1 px-2 w-[150px] "
        />
      </div>
      <br />
      <input
        type="email"
        placeholder="eamil"
        className="outline-none bg-neutral-950 py-1 px-2 w-[300px] mt-[-70px]"
      />
      <br />
      <textarea
        name=""
        id=""
        className="outline-none bg-neutral-950 py-1 px-2 w-[300px] mt-5 h-12 "
      ></textarea>
      <button className="PaynerColor text-zinc-50 py-1 px-2 w-[300px] mt-2">
        Send
      </button>
    </div>
  );
}

export default Send_emil;
