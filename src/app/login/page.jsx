import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
    return (
        <div className="w-full mb-10 lg:w-6/12 lg:mx-auto pt-28">

        <div className="p-10 shadow-xl shadow-orange-500 rounded-md flex justify-center items-center">

            <div className="w-full">
            <h1 className="text-2xl font-bold text-center">Sign In</h1>



<form className="mt-5">

<div className="w-full p-1">
<Label htmlFor="email">Your Email Address:</Label>
<Input className="w-full my-3 " type="email" placeholder="Email" name="email" />
</div>
<div className="w-full p-1">
<Label htmlFor="password">Your Password:</Label>
<Input className="w-full my-3 " type="password" placeholder="Password" name="password" />
</div>
<div className="w-full p-1 mt-3">
<Button className="w-full" variant="destructive">Login</Button>
</div>




</form>

<div>
<p className="text-center py-5 text-sm sm:text-lg font-bold">Do Not Have Any Account ? <Link className="text-orange-500" href={"/register"}>Register</Link></p>
</div>
            </div>




        </div>
        
    </div>
    );
};

export default page;