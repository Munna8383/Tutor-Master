import Link from "next/link";
import { Button } from "../ui/button";



const Banners = () => {
    return (
        <div className="">

            <div className="bg-[url('/groupTeacher.jpg')] bg-cover bg-fixed bg-center h-[80vh] md:h-screen md:rounded-b-[450px] ">

                <div className="h-[80vh] md:h-screen flex justify-center items-center bg-[rgba(0,0,0,0.6)] md:rounded-b-[450px]">

                    <div className="space-y-5 mt-5 sm:mt-0 sm:space-y-7 md:space-y-10 text-white text-center sm:w-9/12 mx-auto z-40">
                        <h1 data-aos="fade-up" className="text-sm sm:text-lg  lg:text-4xl text-white font-semibold sm:font-bold">Your Path to Success Starts with the Right Tutor</h1>
                        <h1 data-aos="fade-up" data-aos-delay="1000" className="text-xs lg:text-2xl sm:font-semibold">Discover the best tutors for personalized learning tailored to your goals.</h1>
                        <div data-aos="fade-up" data-aos-delay="2000" className="flex  justify-center">
                      
                         <Link href={"/findTutor"}>   <Button size="lg" variant="destructive">Find Tutor</Button></Link>

                        </div>
                    </div>


                </div>
            
            </div>
            
        </div>

       
 

    );
};

export default Banners;