"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import useRole from "../singleUser/page";
import { useToast } from "@/hooks/use-toast";

  

const image_key = "882b09b883bdb9615d409ad402b4f806"
const api = `https://api.imgbb.com/1/upload?key=${image_key}`

const page = () => {
    const { toast } = useToast()
    const {person}=useRole()



    const handleSubmit = async(e)=>{

        
        e.preventDefault();

        // Access form elements using their name attributes
        const form = e.target;
       
        const file = {image:form.image.files[0]}; // For the file input
      
        // Package the data
    
      
        // Correct capitalization for FormData
        const res= await axios.post(api,file,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })

        if(res.data.success){

            const university = form.university.value;
            const department = form.department.value;
            const location = form.location.value;
            const salary = form.salary.value;
            const email = form.email.value;
            const name = form.fullName.value
            const option = form.options.value;
            const availability="available"
            const image = res.data.data.url;
            
            const data = { university,department, location, salary ,availability,image,email,option,name};


            const result = await axios.post("https://tutor-master-gules.vercel.app/becomeTutor/api", data);


            if(result.data){
                toast({
                    description: "You are Teacher Now.",
                  })
                  e.target.reset()
            }else{
                
    toast({
        description: "Something Wrong.",
        variant:"destructive"
      })
            }

        }
      
      
    
    }





    return (
        <div data-aos="zoom-in" data-aos-duration="600" className="pt-28 w-11/12 mx-auto dark:text-black">

<div className="text-center">

<h1 className="text-3xl font-bold">Become Teacher</h1>
</div>

  
<div className="mt-5 flex lg:items-stretch rounded-xl">

    <div className="hidden lg:block lg:w-1/2">

        <Image className="h-full" src={"/becomeTeacher.png"} height={700} width={800} alt="become teacher"/>

    </div>

    <div className=" w-full bg-gray-200 shadow-sm shadow-gray-600 lg:w-1/2 p-5">

<form onSubmit={handleSubmit} className="mt-5 w-full grid grid-cols-1 lg:grid-cols-4">

<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="name">Your Name:</Label>
<Input className="w-full my-3 " type="text" placeholder="Your Name" name="fullName" />
</div>
<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="file">Your Photo:</Label>
<Input className="w-full my-3 " type="file"  name="image" />
</div>

<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="salary">Your Email:</Label>
<Input className="w-full my-3 " type="email" placeholder="Your Email" name="email" />
</div>

<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="university">Your University:</Label>
<Input className="w-full my-3 " type="text" placeholder="Your University" name="university" />
</div>
<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="university">Your Department:</Label>
<Input className="w-full my-3 " type="text" placeholder="Your University" name="department" />
</div>
<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="location">Your Location:</Label>
<Input className="w-full my-3 " type="text" placeholder="Your Location" name="location" />
</div>

<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="salary">Expected Salary:</Label>
<Input className="w-full my-3 " type="number" placeholder="Expected Salary" name="salary" />
</div>

<div className="w-full p-1 lg:col-span-2">
<Label htmlFor="salary">Select Process:</Label>
<select className="block w-full my-3 py-2 px-2 rounded-md border-2  border-gray-500 bg-background" name="options" id="options">
  <option value="Negotiable">Negotiable</option>
  <option value="Not Negotiable">Not Negotiable</option>
</select>

</div>
<div className="w-full p-1 mt-3 lg:col-span-4">
<Button disabled={person?.role==="teacher"} className="w-full" variant="destructive">Submit</Button>
</div>




</form>




</div>





</div>


            
        </div>
    );
};

export default page;