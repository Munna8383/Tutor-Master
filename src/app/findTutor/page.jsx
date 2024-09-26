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
  

const teachers=[
    {
        name: "Alice Rahman",
        image: "https://i.imghippo.com/files/EtjoM1726835389.jpg",
        university: "University of Dhaka",
        expectedSalary: 50000, // in BDT
        religion: "Islam",
        contactNumber: "+880123456789",
        location: "Dhaka, Bangladesh",
        gender: "Female"
      },
      {
        name: "Farah Chowdhury",
        image: "https://i.imghippo.com/files/QVJVo1726835328.jpg",
        university: "Shahjalal University",
        expectedSalary: 47000, // in BDT
        religion: "Islam",
        contactNumber: "+880112233445",
        location: "Sylhet, Bangladesh",
        gender: "Female"
      },
      {
        name: "Tania Akter",
        image: "https://i.imghippo.com/files/6Q0ii1726836084.jpg",
        university: "Khulna University",
        expectedSalary: 51000, // in BDT
        religion: "Islam",
        contactNumber: "+880334455667",
        location: "Khulna, Bangladesh",
        gender: "Female"
      },
    {
        name: "Alice Rahman",
        image: "https://i.imghippo.com/files/EtjoM1726835389.jpg",
        university: "University of Dhaka",
        expectedSalary: 50000, // in BDT
        religion: "Islam",
        contactNumber: "+880123456789",
        location: "Dhaka, Bangladesh",
        gender: "Female"
      },
      {
        name: "Farah Chowdhury",
        image: "https://i.imghippo.com/files/QVJVo1726835328.jpg",
        university: "Shahjalal University",
        expectedSalary: 47000, // in BDT
        religion: "Islam",
        contactNumber: "+880112233445",
        location: "Sylhet, Bangladesh",
        gender: "Female"
      },
      {
        name: "Tania Akter",
        image: "https://i.imghippo.com/files/6Q0ii1726836084.jpg",
        university: "Khulna University",
        expectedSalary: 51000, // in BDT
        religion: "Islam",
        contactNumber: "+880334455667",
        location: "Khulna, Bangladesh",
        gender: "Female"
      },
    {
        name: "Alice Rahman",
        image: "https://i.imghippo.com/files/EtjoM1726835389.jpg",
        university: "University of Dhaka",
        expectedSalary: 50000, // in BDT
        religion: "Islam",
        contactNumber: "+880123456789",
        location: "Dhaka, Bangladesh",
        gender: "Female"
      },
      {
        name: "Farah Chowdhury",
        image: "https://i.imghippo.com/files/QVJVo1726835328.jpg",
        university: "Shahjalal University",
        expectedSalary: 47000, // in BDT
        religion: "Islam",
        contactNumber: "+880112233445",
        location: "Sylhet, Bangladesh",
        gender: "Female"
      },
      {
        name: "Tania Akter",
        image: "https://i.imghippo.com/files/6Q0ii1726836084.jpg",
        university: "Khulna University",
        expectedSalary: 51000, // in BDT
        religion: "Islam",
        contactNumber: "+880334455667",
        location: "Khulna, Bangladesh",
        gender: "Female"
      },
    {
        name: "Alice Rahman",
        image: "https://i.imghippo.com/files/EtjoM1726835389.jpg",
        university: "University of Dhaka",
        expectedSalary: 50000, // in BDT
        religion: "Islam",
        contactNumber: "+880123456789",
        location: "Dhaka, Bangladesh",
        gender: "Female"
      },
      {
        name: "Farah Chowdhury",
        image: "https://i.imghippo.com/files/QVJVo1726835328.jpg",
        university: "Shahjalal University",
        expectedSalary: 47000, // in BDT
        religion: "Islam",
        contactNumber: "+880112233445",
        location: "Sylhet, Bangladesh",
        gender: "Female"
      },
      {
        name: "Tania Akter",
        image: "https://i.imghippo.com/files/6Q0ii1726836084.jpg",
        university: "Khulna University",
        expectedSalary: 51000, // in BDT
        religion: "Islam",
        contactNumber: "+880334455667",
        location: "Khulna, Bangladesh",
        gender: "Female"
      },
]
const page = () => {
    return (
        <div className="pt-32 w-11/12 mx-auto">

<div className="text-center">

<h1 className="text-3xl font-bold">Find Teacher</h1>
</div>


<div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3 ">

  {
    teachers.map((item,index)=><div className="p-3 bg-white space-y-2 border-2 border-orange-500" key={index}>

      <Image width={400} height={300} alt="teacher" src={`${item.image}`}/>
      <h1 className="text-sm font-bold">Name: <span className="text-sm font-normal">{item.name}</span></h1>
      <h1 className="text-sm font-bold">University: <span className="text-sm font-normal">{item.university}</span></h1>
      <h1 className="text-sm font-bold">Location: <span className="text-sm font-normal">{item.location}</span></h1>
      <h1 className="text-sm font-bold">Salary: <span className="text-sm font-normal">{item.expectedSalary}</span></h1>
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
      <form>
      <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input id="location" name="location" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input id="phone" name="phone" className="col-span-3" />
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
            
        </div>
    );
};

export default page;