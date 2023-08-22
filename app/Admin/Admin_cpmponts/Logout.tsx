"use client";

import { auth ,db} from "@/app/Firebase/Firebase";
import { type } from "os";
import { useEffect, useState } from "react";
type Allprops ={
  Name: null | string | undefined;
}
function Logout( props: Allprops) {

const [style, setStyle] = useState("")
useEffect(() => {
  
  if(props.Name) {
    setStyle(" bg-red-400  py-1 px-2 w-20 justify-center items-center cursor-pointer font-bold  ")

  }else{
  
    setStyle(" bg-red-400  py-1 px-2 w-20 justify-center items-center cursor-pointer font-bold hidden ")

  }
   

}, [props.Name])

  return (
    <button
    onClick={() => {
      auth.signOut();
    }}
    className={style}
  >
    Logout
  </button>
  )
}

export default Logout