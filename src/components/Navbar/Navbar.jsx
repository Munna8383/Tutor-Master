"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ReloadIcon } from "@radix-ui/react-icons"
import { FaRegSadCry } from "react-icons/fa";
import { FaRegSadTear } from "react-icons/fa";
import useRole from "@/app/singleUser/page";




const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    const pathname = usePathname()
    const session = useSession()
    const router = useRouter()

    const {status}= useSession()


    const [person,isLoading]=useRole()


    const handleLogout =()=>{

        // router.push("/")

        signOut({ callbackUrl: '/' });

        




    }








    return (
           
<div className="fixed w-full max-w-[2200px] mx-auto z-50">
  <div className="w-full">
    <div className="bg-[#001F3F] flex justify-between items-center px-3 sm:px-10 py-5 text-white">
     <Link href={"/"}>
    <div  className="flex gap-2 items-center">
    <Image alt="logo" src={"/teacher2.png"} height={50} width={50} />
        <h1 className="text-lg sm:text-2xl font-bold">Tutor<span className="text-[#6699CC]">Master</span></h1>
    </div>
     </Link>
   

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-7">
        <Link className={`${pathname === "/" ? "text-[#6699CC] border-b-2 border-[#6699CC]" : ""}`} href={"/"}>Home</Link>
        <Link className={`${pathname === "/findTutor" ? "text-[#6699CC] border-b-2 border-[#6699CC]" : ""}`} href={"/findTutor"}>Find Teacher</Link>
        <Link className={`${pathname === "/becomeTutor" ? "text-[#6699CC] border-b-2 border-[#6699CC]" : ""}`} href={"/becomeTutor"}>Become Teacher</Link>
        {person?.role === "teacher" && <Link className={`${pathname === "/profile" ? "text-[#6699CC] border-b-2 border-[#6699CC]" : ""}`} href={"/profile"}>My Profile</Link>}
      </div>

      {/* Auth and Mobile Menu */}
      <div className="flex items-center gap-2 font-semibold sm:gap-7">
        {status === "loading" ? (
          <div className=" hidden md:block md:flex  gap-2">
            <Button size="sm" variant="destructive">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              <FaRegSadCry className="text-black" />
            </Button>
            <Button size="sm" variant="destructive">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              <FaRegSadTear className="text-emerald-700" />
            </Button>
          </div>
        ) : !session.data ? (
          <div className="hidden md:flex gap-3">
            <Link href={"/login"}><Button size="sm" variant="destructive">Login</Button></Link>
            <Link href={"/register"}><Button size="sm" variant="destructive">Register</Button></Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-5">
            <Image title={session.data.user?.name} alt="avatar" height={20} width={24} className="size-10 object-cover rounded-full" src={session.data.user?.image} />
            <Button onClick={handleLogout} size="sm" variant="destructive">Logout</Button>
          </div>
        )}

        {/* Mobile Menu Icon at the End */}
        <div className="md:hidden ml-auto text-2xl" onClick={() => setToggle(!toggle)}>
          {toggle ? <MdCancel className="text-3xl" /> : <TiThMenu className="text-3xl" />}
        </div>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    {toggle && (
    <div data-aos="zoom-in" className="bg-white absolute top-[90px]  transform translate-x-1/2 left-8 w-[300px] mx-auto z-10 text-black divide-y-2 md:hidden px-5 py-2 rounded shadow-lg">
    <Link className="block py-2" href={"/"}>Home</Link>
    <Link className="block py-2" href={"/findTutor"}>Find Teacher</Link>
    <Link className="block py-2" href={"/becomeTutor"}>Become Teacher</Link>
    {person?.role === "teacher" && <Link className="block py-2" href={"/profile"}>My Profile</Link>}
    {!session.data ? (
      <>
        <Link className="block py-2" href={"/login"}>Login</Link>
        <Link className="block py-2" href={"/register"}>Register</Link>
      </>
    ) : (
      <Button className="w-full py-2 mt-2" onClick={handleLogout} size="sm" variant="destructive">Logout</Button>
    )}
  </div>
  
    )}
  </div>
</div>



    //     <div className="fixed w-full border-2 border-red-500 lg:max-w-[1500px] mx-auto  z-50">

       
    //  <div className="w-full">
    //        <div className="bg-[#001F3F] flex justify-between px-3 sm:px-10 py-5 text-white">

    //        <div className="flex gap-2 items-center">
    //         <Image alt="logo" src={"/teacher2.png"} height={50} width={50}/>
    //        <h1 className="text-lg sm:text-2xl font-bold">Tutor<span className="text-[#6699CC]">Master</span></h1>
    //        </div>


    //        <div>
    //         <div className="hidden md:flex h-full
    //          items-center gap-7">
    //             <Link className={`${pathname=="/"?"text-[#6699CC] border-b-2 border-[#6699CC]":""}`}  href={"/"}>Home</Link>
    //             <Link className={`${pathname=="/findTutor"?"text-[#6699CC] border-b-2 border-[#6699CC]":""}`}   href={"/findTutor"}>Find Teacher</Link>
    //             <Link className={`${pathname=="/becomeTutor"?"text-[#6699CC] border-b-2 border-[#6699CC]":""}`}   href={"/becomeTutor"}>Become Teacher</Link>
    //             {person?.role=="teacher" && <Link className={`${pathname=="/profile"?"text-[#6699CC] border-b-2 border-[#6699CC]":""}`}   href={"/profile"}>My Profile</Link>}
    //         </div>
    //        </div>




    //       <div className="flex gap-2 font-semibold sm:gap-7 items-center">
    //      {
    //         status==="loading"?<div className="flex gap-7">
    //             {/* <div className="spinner"></div>
    //             <div className="spinner"></div> */}
    //              <Button size="sm" variant="destructive">
    //   <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    //   <FaRegSadCry className="text-black" />
    // </Button>
    //              <Button size="sm" variant="destructive">
    //   <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    //   <FaRegSadTear className="text-emerald-700" />
    // </Button>

    //         </div>:  !session.data? <div className="flex gap-3"><Link href={"/login"}><Button size="sm" variant="destructive">Login</Button></Link>
    //         <Link href={"/register"}><Button size="sm" variant="destructive">Register</Button></Link></div>:<div className="flex items-center gap-5"><Image title={session.data.user?.name} alt="avater" height={20} width={24} className="size-10 object-cover rounded-full" src={session.data.user?.image}/> <Button onClick={handleLogout} size="sm" variant="destructive">Logout</Button></div>
           
    //      }
    //      <div className="text-2xl md:hidden"  onClick={()=>setToggle(!toggle)}>{toggle? <TiThMenu/>:<MdCancel />}</div>

    //     {
    //         !toggle &&  <div className="!bg-white absolute top-[100px] right-2 z-10 text-black divide-y-2 md:hidden px-14 py-2">
    //         <h1>hello</h1>
    //         <h1>hello</h1>
    //         <h1>hello</h1>
    //         <h1>hello</h1>
    //      </div>
    //     }
        
    //       </div>
           

    //        </div>
    //  </div>
       
            
    //     </div>
    );
};

export default Navbar;