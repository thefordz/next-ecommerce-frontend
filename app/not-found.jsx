import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] items-center justify-center flex flex-col gap-2,">
      <span className="text-4xl mb-5">ไม่พบหน้าที่ค้นหา</span>
      <Link href="/" className="text-white bg-black px-4 py-2 rounded-full">
        ไปหน้าแรก
      </Link>
    </div>
  );
};

export default NotFoundPage;
