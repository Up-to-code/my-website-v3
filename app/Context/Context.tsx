/* eslint-disable react-hooks/rules-of-hooks */
" use client";

import { useEffect, useState } from "react";
import { createContext } from "react";


const defaultValue = { title: "Bag" };
export const CartContext = createContext(defaultValue);

export type ProdackesTypes = {
  id: number;
  image: string | null | undefined;
  title: string;
  price: number;
  description: string;
  op: object;
};

const initSate : ProdackesTypes = {
  id: 0,
  image: undefined,
  title: "",
  price: 0,
  description: "",
  op:{}
}

const [ApiProdact, setApi] = useState({});

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setApi(json));
}, []);


const useApi = (initSate: ProdackesTypes) =>{



}