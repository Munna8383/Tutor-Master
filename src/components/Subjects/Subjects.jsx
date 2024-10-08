
import Marquee from "react-fast-marquee";

const Subjects = () => {
    return (
        <div className="mt-16">

            <div className="text-center">

                <h1 className="text-3xl font-bold dark:text-black">Teachers From Different Department</h1>
            </div>

            <div className="w-full sm:w-9/12 mx-auto mt-10">

            <Marquee speed={35}>

                <div className="p-6 border-2 bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-500 rounded-lg text-white">
                    <h1 className="text-xl font-bold">Bangla</h1>
                </div>
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-white">
                    <h1 className="text-xl font-bold">English</h1>
                </div>
              
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-teal-400 to-blue-900 rounded-lg text-white">
                    <h1 className="text-xl font-bold">Maths</h1>
                </div>
              
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-green-400 via-teal-500 rounded-lg to-blue-600 text-white">
                    <h1 className="text-xl font-bold">Physics</h1>
                </div>
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-[#6A9AB0] rounded-lg  text-white">
                    <h1 className="text-xl font-bold">Biology</h1>
                </div>
              
            
              
              
             
            

           </Marquee>
            <Marquee speed={35} className="mt-5" direction="right">

                <div className="p-6 border-2 bg-gradient-to-r from-pink-500 to-yellow-900 rounded-lg text-white">
                    <h1 className="text-xl font-bold">Chemistry</h1>
                </div>
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-purple-600 to-pink-900 rounded-lg text-white">
                    <h1 className="text-xl font-bold">Statistics</h1>
                </div>
              
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-gray-700 via-gray-900 rounded-lg to-black text-white">
                    <h1 className="text-xl font-bold">Islam</h1>
                </div>
              
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-br from-blue-900 to-purple-700 rounded-lg text-white">
                    <h1 className="text-xl font-bold">Medical</h1>
                </div>
              
                <div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12 xl:ml-[70px]  bg-[#3A6D8C] rounded-lg text-white">
                    <h1 className="text-xl font-bold">Zoology</h1>
                </div>
            
              
             
            

           </Marquee>

           
           <Marquee speed={35} className="mt-5">

<div className="p-6 border-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
    <h1 className="text-xl font-bold">Science</h1>
</div>
<div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12 xl:ml-[70px] bg-gradient-to-r from-orange-900 rounded-lg to-pink-500 text-white">
    <h1 className="text-xl font-bold">Business</h1>
</div>

<div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-blue-900 rounded-lg to-indigo-600 text-white">
    <h1 className="text-xl font-bold">Drawing</h1>
</div>

<div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12  xl:ml-[70px] bg-gradient-to-r from-pink-800 rounded-lg to-purple-900 text-white">
    <h1 className="text-xl font-bold">History</h1>
</div>
<div className="p-6 border-2 ml-3 sm:ml-6 md:ml-12 ] xl:ml-[70px] bg-[#316084] rounded-lg text-white">
    <h1 className="text-xl font-bold">Hindu</h1>
</div>







</Marquee>

            </div>
            
        </div>


    );
};

export default Subjects;