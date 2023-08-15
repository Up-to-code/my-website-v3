import Image from "next/image";
import my_img from "../../public/me.png";
export default function Home_haeder() {
  return (
    <header className="home_header">
      <div className=" container m-auto h-full flex  justify-between">
        <div className="flex items-center justify-center w-72 m-auto ">
          <h1 className="text-2xl  font-semibold ">
            Welcome to me website my name Ahmed front-end developer
            <span className=" text-cyan-500  text-3xl">.</span>
          </h1>
        </div>
        <div className="w-[50%]">
          <div className=" select-none  h-full flex justify-center items-center">
            <div className="  h-[300px] w-[300px] overflow-hidden rounded-full relative ">
              <div className=" absolute  bottom-0 bg-gradient-to-b  from-cyan-500 to-blue-500   h-48 w-48 sikle z-[-1]  shadow-lg  shadow-cyan-500  "></div>
              <Image
                src={my_img}
                alt="is not her"
                className="h-[300px] w-[300px] m-auto z-10 relative bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
