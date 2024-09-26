"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

const image_key = "882b09b883bdb9615d409ad402b4f806"
const api = `https://api.imgbb.com/1/upload?key=${image_key}`

const page = () => {



    const handleSubmit = async(e)=>{

        
        e.preventDefault();

        // Access form elements using their name attributes
        const form = e.target;
        const university = form.university.value;
        const department = form.department.value;
        const location = form.location.value;
        const salary = form.salary.value;
        const file = {image:form.image.files[0]}; // For the file input
      
        // Package the data
        const data = { university,department, location, salary };
      
        // Correct capitalization for FormData
        const res= await axios.post(api,file,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })

        console.log(res.data.url)
      
      
    
    }





    return (
        <div className="pt-32 w-11/12 mx-auto">

<div className="text-center">

<h1 className="text-3xl font-bold">Become Teacher</h1>
</div>

  
<div className="p-10 w-full lg:w-7/12 mx-auto shadow-xl shadow-orange-500 rounded-md flex justify-center items-center">

<div className="w-full">



    <form onSubmit={handleSubmit} className="mt-5">

        <div className="w-full p-1">
            <Label htmlFor="name">Your Name:</Label>
            <Input className="w-full my-3 " type="text" placeholder="Your Name" name="fullName" />
        </div>
        <div className="w-full p-1">
            <Label htmlFor="file">Your Photo:</Label>
            <Input className="w-full my-3 " type="file"  name="image" />
        </div>

        <div className="w-full p-1">
            <Label htmlFor="university">Your University:</Label>
            <Input className="w-full my-3 " type="text" placeholder="Your University" name="university" />
        </div>
        <div className="w-full p-1">
            <Label htmlFor="university">Your Department:</Label>
            <Input className="w-full my-3 " type="text" placeholder="Your University" name="department" />
        </div>
        <div className="w-full p-1">
            <Label htmlFor="location">Your Location:</Label>
            <Input className="w-full my-3 " type="text" placeholder="Your Location" name="location" />
        </div>
        <div className="w-full p-1">
            <Label htmlFor="salary">Expected Salary:</Label>
            <Input className="w-full my-3 " type="number" placeholder="Expected Salary" name="salary" />
        </div>
        <div className="w-full p-1 mt-3">
            <Button className="w-full" variant="destructive">Submit</Button>
        </div>




    </form>
</div>




</div>

  <div>

  </div>
            
        </div>
    );
};

export default page;