/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { auth, db } from "@/app/Firebase/Firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Body_admin from "../Admin_cpmponts/Body_admin";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Storage } from "@/app/Firebase/Firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

function page() {
  const [user, setuser] = useAuthState(auth);
  const [UploadImage, setUploadImage] = useState(Object);
  const [Btn, setBtn] = useState("upload amd send");

  // inputs var
  const [Title, setTitle] = useState("null");
  const [Skilles, setSkilles] = useState("null");
  const [cont, setCont] = useState("null");
  const [Githup, setGithup] = useState("null");
  const [Show, setShow] = useState("null");
  const [ImgUrl, setImgUrl] = useState("");

  const [srcImage, setSrcImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/my-website-310.appspot.com/o/SrcApp%2Fupload.png?alt=media&token=1dcb0beb-8e67-43e0-b864-b6db838ceeb3"
  );

  const AddData = async (url: string) => {
    const docRef = await addDoc(collection(db, "Projkets"), {
      Title,
      Skilles,
      cont,
      Githup,
      Show,
      ImgUrl: url,
    });
  };

  const [url, seturl] = useState(null);

  if (user != null) {
    const UpImage = () => {
      if (UploadImage == null) {
        return;
      } else {
        if (
          Title == "null" ||
          Skilles == "null" ||
          cont == "null" ||
          Githup == "null" ||
          Show == "null"
        ) {
        } else {
          const imageRef = ref(
            Storage,
            `Projkets_img/${user.uid + UploadImage.name}`
          );
          uploadBytes(imageRef, UploadImage).then(() => {
            getDownloadURL(
              ref(Storage, `Projkets_img/${user?.uid + UploadImage.name}`)
            ).then((url) => {
              const xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = (_event) => {
                const blob = xhr.response;
              };
              xhr.open("GET", url);
              xhr.send();

              AddData(url).then(alert);
            });
          });
        }
      }
    };
    const Dane = () => {
      setBtn("upload amd send");
    };
    return (
      <Body_admin>
        <div className=" h-60 PaynerColorLaght  m-auto relative w-[80%]  my-5 rounded-2xl  ">
          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
            <img src={srcImage} alt="upload image" className="w-14 h-14" />
            <p>upload image</p>
          </div>
          <input
            className=" w-full h-full inp "
            type="file"
            onChange={(event) => {
              setUploadImage(event.target.files?.[0]);
              if (event.target.files && event.target.files[0]) {
                setSrcImage(URL.createObjectURL(event.target.files[0]));
              }
            }}
          />
        </div>
        <div className="w-[80%] m-auto flex justify-center items-center flex-col">
          <div className="flex flex-col w-full ">
            <label className="ont-medium text-xl text-neutral-300 ">
              Titel
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className=" rounded-sm   p-2 h-10    w-full outline-none  bg-neutral-900 f     my-2"
            />
          </div>

          <div className="flex flex-col w-full mt-5">
            <label className="ont-medium text-xl text-neutral-300 ">
              Wat you tiknolges uset
            </label>
            <input
              onChange={(e) => {
                setSkilles(e.target.value);
              }}
              type="text"
              className=" rounded-sm  p-2 h-10     w-full outline-none  bg-neutral-900 f    my-2"
            />
          </div>

          <div className="flex flex-col w-full mt-5">
            <label className="ont-medium text-xl text-neutral-300 ">
              Wat you tiknolges uset
            </label>
            <textarea
              onChange={(e) => {
                setCont(e.target.value);
              }}
              className=" h-40 rounded-sm    p-2  w-full outline-none  bg-neutral-900   my-2"
            />
          </div>
          <div className="flex gap-2 justify-between w-full">
            <div className="flex flex-col w-full mt-5">
              <label className="ont-medium text-xl text-neutral-300 ">
                Githup
              </label>
              <input
                onChange={(e) => {
                  setGithup(e.target.value);
                }}
                type="text"
                className=" rounded-sm p-2 h-10       w-full outline-none  bg-neutral-900  my-2"
              />
            </div>
            <div className="flex flex-col w-full mt-5">
              <label className="ont-medium text-xl text-neutral-300 ">
                Show
              </label>
              <input
                onChange={(e) => {
                  setShow(e.target.value);
                }}
                type="text"
                className=" rounded-sm w-full outline-none  bg-neutral-900 p-2 h-10  my-2"
              />
            </div>
          </div>

          <div className="my-16  w-full flex justify-end items-end ">
            <button
              onClick={UpImage}
              className=" PaynerColor text-white font-bold rounded py-2 px-20 "
            >
              {Btn}
            </button>
          </div>
        </div>
      </Body_admin>
    );
  } else {
    return (
      <p className=" bg-red-800 py-5 font-bold text-center   ">
        sorry but you is not login
      </p>
    );
  }
}

export default page;
