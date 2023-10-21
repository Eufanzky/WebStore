import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded bg-white w-[360px] h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div><XMarkIcon className="sh-6 w-6 text-black hover:cursor-pointer"></XMarkIcon></div>
      </div>
    </aside>
  );
};
