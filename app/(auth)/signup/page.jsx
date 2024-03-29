import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] py-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-5">สมัครสมาชิก</h1>
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid w-full max-w-sm items-center gap-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />

          <Label htmlFor="password">Confirm Password</Label>
          <Input type="password" id="password" placeholder="Confirm Password" />
          <Button>สมัครสมาชิก</Button>
          <span className="text-center">หรือ</span>
          <Link href="/signin">
            <Button className="w-full">เข้าสู่ระบบ</Button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignUpPage;
