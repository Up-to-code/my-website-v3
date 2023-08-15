"use client";
import { useState } from "react";

function Form_bt() {
  let darkBtn = " py-1 px-3 font-bold rounded border-b-zinc-900 ml-3";
  let LaghtBtn = " py-1 px-3 font-bold rounded bg-cyan-600 ml-3  ";

  const [Btn1, setBtn1] = useState(LaghtBtn);
  const [Btn2, setBtn2] = useState(darkBtn);
  const [Btn3, setBtn3] = useState(darkBtn);

  const HadelBtn1 = () => {
    setBtn1(LaghtBtn);
    setBtn2(darkBtn);
    setBtn3(darkBtn);
    console.log("first");
  };
  const HadelBtn2 = () => {
    setBtn1(darkBtn);
    setBtn2(LaghtBtn);
    setBtn3(darkBtn);
  };
  const HadelBtn3 = () => {
    setBtn1(darkBtn);
    setBtn2(darkBtn);
    setBtn3(LaghtBtn);
  };

  return (
    <>
      <div className=" container m-auto flex items-center justify-center">
        <div className=" m-auto mb-10 p-1">
          <button
            onClick={() => {
              HadelBtn1();
            }}
            className={Btn1}
          >
            All Projekts
          </button>
          <button
            onClick={() => {
              HadelBtn2();
            }}
            className={Btn2}
          >
            Front-end
          </button>
          <button
            onClick={() => {
              HadelBtn3();
            }}
            className={Btn3}
          >
            Back-end
          </button>
        </div>
      </div>
    </>
  );
}

export default Form_bt;
