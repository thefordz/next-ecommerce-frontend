"use client";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Menu, Search, ShoppingBasket } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const checkout = () => {
    router.push("/checkout");
  };
  return (
    <header className="fixed z-10 top-0 left-0 px-5  w-full bg-white shadow-xl">
      <div className="py-4 max-w-7xl gap-4 mx-auto flex items-center justify-between">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
        <div className="flex items-center w-full md:w-[50%] justify-center gap-3 border rounded-full px-2">
          <Search />
          <Input
            type="text"
            placeholder="Search"
            className="border-0 focus:border-0 focus-visible:ring-0 shadow-none"
          />
        </div>
        <div className="flex gap-3">
          <div className="hidden md:flex gap-4">
            <Link href="/">หน้าแรก</Link>
            <Link href="/signin">เข้าสู่ระบบ</Link>
          </div>
          <div className="flex items-center justify-center">
            <Sheet>
              <SheetTrigger>
                <ShoppingBasket />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>สรุปคำสั่งซื้อ</SheetTitle>
                </SheetHeader>

                <div className="my-5 flex gap-2 bg-gray-100 p-2 rounded-xl">
                  <Image
                    src="/product/white-shirt.jpg"
                    width={100}
                    height={100}
                    className=""
                  />
                  <div className="flex flex-col">
                    <span>White Shirt</span>
                    <span>Size : X</span>
                    <span>
                      ราคา : <span className="font-bold">200</span> บาท
                    </span>
                  </div>
                </div>
                <div className="p-2 text-end">รวม 200 บาท</div>

                <SheetFooter className="">
                  <SheetClose asChild>
                    <Button onClick={checkout} type="submit">
                      ทำการสั่งซื้อ
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <div className=" gap-5 text-xl w-full h-full flex mt-5 flex-col font-bold">
                  <Link href="/">หน้าแรก</Link>
                  <Link href="/signin">เข้าสู่ระบบ</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
