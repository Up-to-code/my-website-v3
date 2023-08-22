import Image from "next/image";

import my_img from "../../public/me.png";

function My_skills() {
  return (
    <div className="SacendColor  min-h-[400px] mb-10 ">
      <div className=" container m-auto max-w-[800px] h-full flex">
        <div className=" w-[300px] h-[400px] flex justify-center items-center">
          <div className="PaynerColor to-blue-500 h-[200px] w-[200px] ">
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
              <span className=" text_PaynerColor  text-3xl"> .</span>
            </h2>
            <br />
            <div className="flex  flex-wrap gap-4">
              <p className="PaynerColor w-fit  px-5 py-1 ">HTML</p>
              <p className="PaynerColor w-fit  px-5 py-1 ">CSS</p>
              <p className="PaynerColor w-fit  px-5 py-1 ">JAVASCRIPT</p>
              <p className="PaynerColor w-fit  px-5 py-1 ">TAILWIND CSS</p>
              <p className="PaynerColor w-fit  px-5 py-1 ">REACT.JS</p>
              <p className="PaynerColor w-fit  px-5 py-1 ">NEXT.13</p>
              <p className="PaynerColor w-fit  px-5 py-1 ">NODE.JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_skills;
