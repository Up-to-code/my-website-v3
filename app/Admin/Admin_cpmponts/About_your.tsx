/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { auth } from "@/app/Firebase/Firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
function About_your() {
  const [user, setuser] = useAuthState(auth);

  return (
    <div className="w-[90%] m-auto mt-10  SacendColor  min-h-[70px] rounded  flex justify-between items-center ">
      <div className=" w-3/4 mx-4 my-2 overflow-hidden">
        <p className="text-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          expedita quaerat temporibus nam molestias obcaecati doloremque quis!
          Eligendi fugiat atque aspernatur corporis voluptatum excepturi quos,
        </p>
      </div>
      <div className="h-[100%] w-[20%] flex justify-center items-center">
        <img
          alt=""
          src={
            user?.photoURL
              ? user.photoURL
              : "https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          }
          className="w-14 rounded-full "
        />
      </div>
    </div>
  );
}

export default About_your;
