import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
]

const Featured = () => {
    return (
        <div className="mt-16 w-11/12 mx-auto">

<div className="text-center">

<h1 className="text-3xl font-bold">Featured Teacher</h1>
</div>


<div  className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3 ">

  {
    teachers.map((item,index)=><div data-aos="flip-up" data-aos-delay="700" data-aos-duration="600" className="p-3 bg-white space-y-2 border-2 border-orange-500" key={index}>

      <Image width={400} height={300} alt="teacher" src={`${item.image}`}/>
      <h1 className="text-sm font-bold">Name: <span className="text-sm font-normal">{item.name}</span></h1>
      <h1 className="text-sm font-bold">University: <span className="text-sm font-normal">{item.university}</span></h1>
      <h1 className="text-sm font-bold">Location: <span className="text-sm font-normal">{item.location}</span></h1>
      <h1 className="text-sm font-bold">Salary: <span className="text-sm font-normal">{item.expectedSalary}</span></h1>

    </div>)
  }


</div>

  <div className="mt-5 flex justify-center">
  <Link href={"/findTutor"}>  <Button variant="destructive">View All Teachers</Button></Link>
  </div>
            
        </div>
    );
};

export default Featured;