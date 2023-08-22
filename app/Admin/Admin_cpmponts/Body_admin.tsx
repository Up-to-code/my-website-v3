import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Mune from "./Mune";
import Navbar from "./Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/Firebase/Firebase";
import { Children, useEffect, useState } from "react";
import { type } from "os";
type Prpos = {
  children: JSX.Element;
};

function Body_admin(Prpos: { children: any }) {
  const GoogleAuth = new GoogleAuthProvider();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setuser] = useAuthState(auth);
  const Login = async () => {
    const reaslt = await signInWithPopup(auth, GoogleAuth);
  };
  const [Bun, setbtn] = useState("");

  useEffect(() => {
    if (user?.displayName) {
      setbtn(
        "PaynerColor py-1 px-2 w-20 justify-center items-center cursor-pointer font-bold  hidden"
      );
    } else {
      setbtn(
        "PaynerColor py-1 px-2 w-20 justify-center items-center cursor-pointer font-bold "
      );
    }
  }, [user]);
  return (
    <>
      <Navbar
        Login={Login}
        Bun={Bun}
        URL_Phot={user ? user?.photoURL : ""}
        Name={user?.displayName}
      />

      <div className="flex">
        <Mune />
        <div className="w-full   bg-neutral-950  H_logo  mt-14 overflow-x-scroll">
          {Prpos.children}
        </div>
      </div>
    </>
  );
}

export default Body_admin;
