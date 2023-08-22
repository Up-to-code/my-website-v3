import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="  h-12 w-full  SacendColor flex justify-center items-center">
        <div className=" container h-full flex justify-center">
          <div className=" flex justify-between  max-w-4xl  m-auto h-full w-full">
            <div className="flex items-center font-bold ">Ahmed Mansour</div>
            <div className="flex items-center">
              <Link className=" p-[2px]" href={""}>link 1</Link>
              <Link className=" p-[2px]" href={""}>link 1</Link>
              <Link className=" p-[2px]" href={""}>link 1</Link>
              <Link className=" p-[2px]" href={""}>link 1</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
