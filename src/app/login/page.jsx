"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";




const page = () => {

  const router = useRouter()
  const { toast } = useToast()

   const handleLogin = async(e) =>{

    e.preventDefault()
    
    const form = e.target;


    const email = form.email.value;
    const password = form.password.value;

   try{

    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res.status===200){


      toast({
        description: "Login Successful.",
      })

    }else{

      toast({
        description: "Something Wrong.",
        variant:"destructive"
      })

    }

  


  setTimeout(()=>{
    
    if(res.status===200){
      router.push("/")
    }
  },1000)


   }catch(error){

    toast({
      description: "Something Wrong.",
      variant:"destructive"
    })




   }


   }





  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="600"
      className="w-full mb-10 lg:w-5/12 xl:w-5/12 lg:mx-auto pt-28 dark:text-black"
    >
      <div className="py-2 px-4 bg-gray-200 shadow-sm shadow-gray-600 rounded-md flex justify-center items-center mt-5">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center">Sign In</h1>

          <form onSubmit={handleLogin} className="mt-5">
            <div className="w-full p-1">
              <Label htmlFor="email">Your Email Address:</Label>
              <Input
                className="w-full my-3 "
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="w-full p-1">
              <Label htmlFor="password">Your Password:</Label>
              <Input
                className="w-full my-3 "
                type="password"
                placeholder="Your Password"
                name="password"
              />
            </div>
            <div className="w-full p-1 mt-3">
              <Button className="w-full" variant="destructive">
                Login
              </Button>
            </div>
          </form>

          {/* <button className="w-full text-center justify-center bg-[#6699CC]  py-2 rounded-xl mt-3 flex gap-3 items-center text-white ">

          <FaGoogle />
          <span>Sign In With Google</span>
            

          </button> */}

          <div>
            <p className="text-center py-5 text-sm sm:text-base font-semi-bold">
              Do Not Have Any Account ?{" "}
              <Link className="text-[#6699CC]" href={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;