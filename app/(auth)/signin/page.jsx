import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] py-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-5">เข้าสู่ระบบ</h1>
      <div className="w-full h-full">
        <div className="grid w-full max-w-sm items-center gap-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
          <Button>เข้าสู่ระบบ</Button>
          <span className="text-center">หรือ</span>
          <Link href="/signup">
            <Button className="w-full">สมัคสมาชิก</Button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignInPage;
