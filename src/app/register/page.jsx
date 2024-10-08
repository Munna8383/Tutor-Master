"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";



const image_key = "882b09b883bdb9615d409ad402b4f806"
const api = `https://api.imgbb.com/1/upload?key=${image_key}`

const page = () => {

  const router = useRouter()
  const { toast } = useToast()



    const handleRegister = async (e) => {
        e.preventDefault();
      
        const form = e.target;
        const file = { image: form.image.files[0] };


        const passwordRegex = /^[A-Z](?=.*\d)[A-Za-z\d]{5,}$/;


        const password = form.password.value;
        

        if (!passwordRegex.test(password)) {
         return toast({
            variant:"destructive",
            description: "Password Must One Number And First letter should be Capital",
          })
          } 
      
        try {
          const res = await axios.post(api, file, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      
          if (res.data.success) {
            const email = form.email.value;
            const password = form.password.value;
            const name = form.name.value;
            const image = res.data.data.url;
            const role = "user"
            const data = { email, password, name, image ,role};
      
            const registerRes = await axios.post("https://tutor-master-gules.vercel.app/register/api", data);
      
            if (registerRes.data.message === "user Created") {
              toast({
                description: "User Created.",
              })
              e.target.reset()
            } else if (registerRes.data.message === "user exist") {
              toast({
                variant:"destructive",
                description: "User Already exist.",
              })
            } else {
              toast({
                variant:"destructive",
                description: "Something Wrong.",
              })
            }

            if (registerRes.data.message === "user Created") {
                router.push("login")
            }


          }
        } catch (error) {
          toast({
            variant:"destructive",
            description: "Something Wrong.",
          })
        }
      };
      

    






    return (
        <div data-aos="zoom-in" data-aos-duration="600" className="w-full mb-10 lg:w-5/12 lg:mx-auto pt-28 dark:text-black">

            <div className="p-6 bg-gray-200  shadow-sm shadow-gray-600 mt-5 rounded-md flex justify-center items-center">

                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>



                    <form method="POST" onSubmit={handleRegister} className="mt-5 grid grid-cols-1 lg:grid-cols-2">

                        <div className="w-full p-1">
                            <Label htmlFor="name">Your Name:</Label>
                            <Input className="w-full my-3 " type="text" placeholder="Your Name" name="name" />
                        </div>
                        <div className="w-full p-1">
                            <Label htmlFor="file">Your Photo:</Label>
                            <Input className="w-full my-3 " type="file"  name="image" />
                        </div>

                        <div className="w-full p-1">
                            <Label htmlFor="email">Your Email Address:</Label>
                            <Input className="w-full my-3 " type="email" placeholder="Your Email" name="email" />
                        </div>
                        <div className="w-full p-1">
                            <Label htmlFor="password">Your Password:</Label>
                            <Input className="w-full my-3 " type="password" placeholder=" Your Password" name="password" />
                        </div>
                        <div className="w-full p-1 mt-3 lg:col-span-2">
                            <Button className="w-full" variant="destructive">Register</Button>
                        </div>




                    </form>

                    <div>
                        <p className="text-center py-5 text-sm sm:text-base font-semi-bold">Already Have Account ? <Link className="text-[#6699CC]" href={"/login"}>Login</Link></p>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default page;