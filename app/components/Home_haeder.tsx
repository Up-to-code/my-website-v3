import Image from "next/image";
import my_img from "../../public/meA.png";
export default function Home_haeder() {
  return (
    <header className="home_header">
      <div className=" container m-auto h-full flex  justify-between">
        <div className="flex items-center justify-center w-72 m-auto ">
          <h1 className="text-2xl  font-semibold ">
            Welcome to me website my name Ahmed front-end developer
            <span className=" text_PaynerColor  text-3xl">.</span>
          </h1>
        </div>
        <div className="w-[50%] flex justify-center items-center">
 
              <Image
                src={my_img}
                alt="is not her"
                className="w-[270px] m-auto z-10 relative bottom-0"
              />
          </div>

      </div>
    </header>
  );
}
