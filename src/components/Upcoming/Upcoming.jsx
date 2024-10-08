import Image from "next/image";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";



const Upcoming = () => {
    return (
        <div className="mt-16 w-11/12 mx-auto">

<div className="text-center">

<h1 className="text-3xl font-bold dark:text-black">Upcoming Feature</h1>
</div>


<div className="flex flex-col lg:flex-row items-center lg:items-stretch mt-5">

  <div className="w-full bg-slate-800 p-3 rounded-l-lg lg:w-1/2 flex flex-col justify-center">
    <div className="space-y-10 text-center">
      <h1 className="text-2xl font-bold text-white">The Wait is Over</h1>
      <h1 className="text-2xl font-bold text-white">Our Mobile Version Is Coming!</h1>
      <h1 className="text-2xl font-bold text-white">Available In</h1>
      <div className="flex justify-center gap-16">
        <div className="flex items-center gap-2 bg-blue-500 text-white p-3 rounded-xl bigger">
          <span><FaAppStoreIos /></span>
          <span>App Store</span>
        </div>
        <div className="flex items-center gap-2 bg-orange-400 text-white p-3 rounded-xl bigger">
          <span><IoLogoGooglePlaystore /></span>
          <span>Play Store</span>
        </div>
      </div>
      <p className="text-sm text-white">Note: The app will be premium</p>
    </div>
  </div>

  <div className="w-full lg:w-1/2 rounded-r-lg flex justify-center">
    <Image className=" w-full rounded-r-lg" height={200} width={300} alt="mobile" src="/mobile.jpeg" />
  </div>

</div>



            
        </div>
    );
};

export default Upcoming;