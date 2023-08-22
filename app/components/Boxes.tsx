import Image from "next/image";
import img_Projekt from "../../public/Projekt.png";
function Boxes() {
  return (
    <>
      <div className="  w-[300px] h-[270px]  overflow-hidden rounded-lg bg-neutral-800 mb-10 m-auto hover:shadow-md">
        <div className="h-44 overflow-hidden ">
          <Image src={img_Projekt} alt="is not her" className="h-64 " />
        </div>
        <p className="m-2 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
      </div>
    </>
  );
}

export default Boxes;
