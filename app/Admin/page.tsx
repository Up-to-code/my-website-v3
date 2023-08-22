/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { auth, db } from "../Firebase/Firebase";
import { useEffect, useState } from "react";

import { collection, getDocs, query } from "firebase/firestore";
import Body_admin from "./Admin_cpmponts/Body_admin";
import Projkets from "./Admin_cpmponts/Projkets";
import About_your from "./Admin_cpmponts/About_your";

function page() {

  const [DataApp , setDataapp] = useState(Object)

  const q = collection(db, "Projkets");
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(q);
      setDataapp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [q]);

  return (
    <>
      <Body_admin>
        <About_your />
        <Projkets Data={DataApp}/>
      </Body_admin>
    </>
  );
}

export default page;
