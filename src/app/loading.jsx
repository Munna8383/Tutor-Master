import Image from "next/image";


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="h-screen flex justify-center items-center">

    <Image className="bigger2" src={"/teacher2.png"} width={100} height={100} alt="loading"/>

    </div>
  }