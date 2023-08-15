import Image from "next/image";

import my_img from "../../public/me.png";

function My_skills() {
  return (
    <div className="bg-zinc-800  min-h-[400px] mb-10 ">
      <div className=" container m-auto max-w-[800px] h-full flex">
        <div className=" w-[300px] h-[400px] flex justify-center items-center">
          <div className="bg-gradient-to-b  from-cyan-500 to-blue-500 h-[200px] w-[200px] ">
            <Image
              src={my_img}
              alt="is not her"
              className=" m-auto z-10 relative bottom-0"
            />
          </div>
        </div>
        <div className="w-[600px] h-[400px] flex  items-center">
          <div className=" h-[200px] ">
            <h2 className="font-bold text-3xl ">
              This my skills
              <span className=" text-cyan-500  text-3xl"> .</span>
            </h2>
            <br />
            <div className="flex  flex-wrap gap-4">
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">HTML</p>
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">CSS</p>
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">JAVASCRIPT</p>
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">TAILWIND CSS</p>
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">REACT.JS</p>
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">NEXT.13</p>
              <p className="bg-cyan-600 w-fit  px-5 py-1 ">NODE.JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_skills;
