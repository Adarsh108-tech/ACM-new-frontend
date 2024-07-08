import Image from "next/image";
import logo from "../assets/acm.png";
import { Card, CardTitle } from "@/components/ui/card";
import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@mui/material";
import { Input } from "@/components/ui/input";
export default function Home() {  
  return (
    <div className="flex w-full h-[100vh] max-sm:flex-col-reverse">
      <div className="w-[60%] max-sm:w-full h-[100%] rounded-[0px_20px_20px_0px] max-sm:items-start p-10 max-sm:rounded-[20px_20px_0px_0px] bg-gradient-to-b from-[rgb(78,115,223)] to-[rgb(35,75,191)] flex items-center justify-center shadow-xl shadow-black">
        <Card className="w-[60%] h-[40%] max-sm:w-[80%] max-sm:h-[40%] max-sm:rounded-2xl bg-white rounded-lg flex items-center justify-center flex-col gap-2">
          <CardTitle className="mb-2 text-2xl">Welcome Admin !</CardTitle>
          <CardContent className="gap-2 w-[100%] flex flex-col justify-center items-center">
            <Input type="text" placeholder="username"></Input>
            <Input type="password" placeholder="password"></Input>
          <Button variant="log" size="lg" className="rounded-2xl">Login</Button>
          </CardContent>
          {/* <button className="w-[50%] h-[10%] rounded-lg bg-blue-500 text-white hover:bg-blue-600">Login</button> */}
        </Card>
      </div>
      <div className="h-[100%] w-[40%]  max-sm:w-[100%] max-sm:h-[20%] flex items-center justify-center">
        <Image src={logo} alt={"acm"}  className="w-[50%] h-[35%] max-sm:h-[80%] max-sm:w-[30%]"/>
      </div>
    </div>
  );
}
