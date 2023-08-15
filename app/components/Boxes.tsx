import Image from "next/image";
import img_Projekt from "../../public/Projekt.png";
function Boxes() {
  return (
    <>
      <div className=" border-r-blue-500 w-[300px] h-[270px]  overflow-hidden rounded-lg bg-neutral-800 mb-10 m-auto">
        <Image src={img_Projekt} alt="is not her" className="" />
        <p className="mx-5 font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
      </div>
    </>
  );
}

export default Boxes;
