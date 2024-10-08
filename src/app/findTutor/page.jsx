"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from "react"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useToast } from "@/hooks/use-toast";




const page = () => {

  const { toast } = useToast()

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["teacher"],
    queryFn: async () => {
      const res = await axios.get("https://tutor-master-gules.vercel.app/becomeTutor/teacher/api")

      return res.data.result
    }
  })


  const handleRequest = async (e, email, single) => {

    e.preventDefault()

    const form = e.target;

    const name = form.name.value
    const phone = form.phone.value
    const location = form.location.value
    const teacherEmail = email
    const id = single
    const status = "pending"
    const studentEmail = form.email.value



    const info = { name, phone, location, studentEmail, teacherEmail, id ,status}

    const result = await axios.post("https://tutor-master-gules.vercel.app/request/api", info)


    if (result.data.message) {
      toast({
        description: "Requested.",
      });
      e.target.reset();
    } else {
      toast({
        description: "Something Wrong.",
        variant: "destructive",
      });
    }





  }


  return (
    <div className="pt-28 w-11/12 mx-auto dark:text-black">

      <div className="text-center">

        <h1 className="text-3xl font-bold">Find Teacher</h1>
      </div>

      <SkeletonTheme baseColor="#eeeeee" highlightColor="#6699CC">



        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3 ">

          {
            isLoading ? Array.from({ length: 6 }).map((item, index) => <div data-aos="zoom-in" data-aos-duration="600" className="p-3 bg-white space-y-2 border-2 border-[#E0E0E0]" key={index}>

              <Skeleton height={250} />
              <h1 className="text-sm font-bold"><Skeleton /></h1>
              <h1 className="text-sm font-bold"><Skeleton /></h1>
              <h1 className="text-sm font-bold"><Skeleton /></h1>
              <h1 className="text-sm font-bold"><Skeleton /></h1>
              <h1 className="text-sm font-bold"><Skeleton /></h1>
              <div className="flex justify-end">
                <h1 className="text-sm font-bold"><Skeleton /></h1>
              </div>

            </div>) : data?.map((item, index) => <div data-aos="zoom-in" data-aos-duration="600" className="p-3 bg-white space-y-2 border-2 border-[#E0E0E0]" key={index}>

              <Image width={400} className="h-[300px] mx-auto" height={300} alt="teacher" src={`${item?.image}`} />
              <h1 className="text-sm font-bold">Name: <span className="text-sm font-normal">{item.name}</span></h1>
              <h1 className="text-sm font-bold">University: <span className="text-sm font-normal">{item.university}<span>-({item.department})</span></span></h1>
              <h1 className="text-sm font-bold">Location: <span className="text-sm font-normal">{item.location}</span></h1>
              <h1 className="text-sm font-bold">Status: <span className="text-sm font-normal">{item.availability == "available" ? <span className="bg-green-200 text-black px-[4px] py-[2px] rounded-lg">{item.availability}</span> : <span className="bg-red-200 text-black px-[4px] py-[1px] rounded-lg">{item.availability}</span>}</span></h1>
              <h1 className="text-sm font-bold">Salary: <span className="text-sm font-normal">{item.salary}<span>({item.option})</span></span></h1>
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Request</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Request A Teacher</DialogTitle>
                      <DialogDescription>
                        Provide Your Information to get response from a Teacher.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={(e) => handleRequest(e, item.email, item._id)}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input id="name" type="text" placeholder="Your Name" name="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="location" className="text-right">
                            Location
                          </Label>
                          <Input id="location" type="text" placeholder="Your Location" name="location" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input id="email" type="email" name="email" placeholder="Your Email" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="phone" type="number" className="text-right">
                            Phone
                          </Label>
                          <Input id="phone" name="phone" placeholder="Phone Number" className="col-span-3" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="destructive" type="submit">Request</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

            </div>)
          }


        </div>
      </SkeletonTheme>



    </div>
  );
};

export default page;