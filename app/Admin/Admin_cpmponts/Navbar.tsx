/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import Logout from "./Logout";
import Login_Google from "./Login_Google";
import Link from "next/dist/client/link";

type ThePropos = {
  URL_Phot: null | string;
  Name: null | string | undefined;
  Login: object;
  Bun: string;
};
function Navbar(props: ThePropos) {
  return (
    <nav className="SacendColor flex justify-center items-center h-14 fixed w-full ">
      <div className="container max-w-[800px]  flex justify-between ">
        <div className="flex  items-center gap-3 font-semibold">
          <img
            src={
              props.URL_Phot
                ? props.URL_Phot
                : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            }
            alt="hhhh"
            className="w-10 rounded-full "
          />
          <Link href={"/"}>
          <p>{props.Name ? props.Name : "Name"}</p>
          </Link>
        </div>
        <div className="flex  items-center gap-3 font-semibold">
        <Login_Google Login={props.Login} Bun={props.Bun} />
          <Logout Name={props.Name} />
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
