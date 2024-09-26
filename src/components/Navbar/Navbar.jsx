"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { usePathname } from "next/navigation";




const Navbar = () => {
    const [toggle,setToggle]=useState(true)
    const pathname = usePathname()


    return (
        <div className="fixed max-w-7xl mx-auto w-full z-50">

       
     <div className="w-full">
     <div className="flex justify-center items-center flex-wrap sm:text-center sm:justify-end bg-black px-5 py-[1px]">
            <p className=" text-white text-xs sm:text-base">Tutor master Website! || Jahed Ahmed Munna || +8801795500756</p>
           </div>
           <div className="bg-[#001f3f] flex justify-between px-3 sm:px-10 py-4 text-white">

           <div className="flex gap-2 items-center">
            <Image alt="logo" src={"/teacher2.png"} height={50} width={50}/>
           <h1 className="text-lg sm:text-2xl font-bold">Tutor<span className="text-orange-500">Master</span></h1>
           </div>


           <div>
            <div className="hidden md:flex h-full
             items-center gap-7">
                <Link className={`${pathname=="/"?"text-orange-500 border-b-2 border-orange-500":""}`}  href={"/"}>Home</Link>
                <Link className={`${pathname=="/findTutor"?"text-orange-500 border-b-2 border-orange-500":""}`}   href={"/findTutor"}>Find Teacher</Link>
                <Link className={`${pathname=="/becomeTutor"?"text-orange-500 border-b-2 border-orange-500":""}`}   href={"/becomeTutor"}>Become Teacher</Link>
                <Link className={`${pathname=="/profile"?"text-orange-500 border-b-2 border-orange-500":""}`}   href={"/profile"}>My Profile</Link>
            </div>
           </div>




          <div className="flex gap-2 font-semibold sm:gap-5 items-center">
        <Link href={"/login"}><Button size="sm" variant="destructive">Login</Button></Link>
        <Link href={"/register"}><Button size="sm" variant="destructive">Register</Button></Link>
         <div className="text-2xl md:hidden"  onClick={()=>setToggle(!toggle)}>{toggle? <TiThMenu/>:<MdCancel />}</div>

        {
            !toggle &&  <div className="!bg-white absolute top-[100px] right-2 z-10 text-black divide-y-2 md:hidden px-14 py-2">
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
         </div>
        }
        
          </div>
           

           </div>
     </div>
       
            
        </div>
    );
};

export default Navbar;