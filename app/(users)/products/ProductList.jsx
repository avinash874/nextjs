"use client";

import { useSearchParams } from "next/navigation"

const ProductList = () => {
    const searchParam = useSearchParams();
    const pages = searchParam.getAll("page");
    const category = searchParam.get("category");
    const entries = Object.fromEntries(searchParam.entries());

    console.log("page: ", pages);
    console.log("category",category);
    console.log("entries: ", entries);
    
    
  return (
    <>
    <h1>client</h1>
    </>
  )
}

export default ProductList
