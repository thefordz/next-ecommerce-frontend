import Image from "next/image";
import React from "react";

const Product = ({ image, name, size, price }) => {
  return (
    <div className="flex flex-col gap-2 shadow-md rounded-xl">
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden flex flex-col">
        <Image
          src={image}
          width="200"
          height="200"
          className="w-full aspect-square object-cover "
        />

        <span className="absolute flex items-center justify-center bg-green-300 rounded-full px-2 py-1 top-2 right-2">
          {size}
        </span>
      </div>
      <div className="flex flex-col p-4">
        <span className="font-bold">{name}</span>
        <span>ราคา {price} บาท</span>
      </div>
    </div>
  );
};

export default Product;
