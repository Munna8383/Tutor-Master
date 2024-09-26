"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";

  
  


const feedbacks = [
    {
      picture: "https://i.imghippo.com/files/MUUhC1726728802.jpg",
      name: "John Carter",
      message: "This platform made it easy for me to find a qualified tutor. The search feature is great, and I loved how quickly I could schedule my sessions."
    },
    {
      picture: "https://i.imghippo.com/files/EXb3l1726728771.jpg",
      name: "Sarah Lee",
      message: "The tutor profiles are very detailed, making it simple to choose the right one. I was able to improve my math skills significantly thanks to the amazing tutor I found here!"
    },
    {
      picture: "https://i.imghippo.com/files/qpKus1726728828.jpg",
      name: "Michael Brown",
      message: "The user interface is intuitive and easy to navigate. It took no time to book lessons, and the feedback system helped me pick the best tutor for my needs."
    },
    {
      picture: "https://i.imghippo.com/files/h3nFc1726728859.jpg",
      name: "Emily Clark",
      message: "I had an excellent experience using this platform. The process of finding and contacting a tutor was seamless, and the quality of tutors available is outstanding!"
    }
  ];
  

const Feedback = () => {   

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
      )
    const plugin2 = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
      )
    




    return (
        <div className="mt-16 w-11/12 mx-auto">
            
<div className="text-center">

<h1 className="text-3xl font-bold">User Feedbacks</h1>
</div>

         <div className="mt-5 flex flex-col lg:flex-row justify-center gap-32">


         <Carousel
      plugins={[plugin2.current]}
      className="w-full lg:w-1/2 shadow-xl shadow-gray-500 p-5"
      onMouseEnter={plugin2.current.stop}
      onMouseLeave={plugin2.current.reset}
    >
      <CarouselContent>
        {feedbacks.slice(0,2).map((item, index) => (
          <CarouselItem key={index}>
           <div className="p-5 space-y-5 text-center">
            <Image className="size-32 rounded-full mx-auto" width={200} height={200} src={`${item.picture}`}></Image>
                 <h1 className="text-lg font-semibold">{item.name}</h1>
                 <p>{item.message}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <Carousel
      plugins={[plugin.current]}
      className="w-full lg:w-1/2 shadow-xl shadow-slate-500 p-5"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {feedbacks.slice(2,4).map((item, index) => (
          <CarouselItem key={index}>
           <div className="p-5 space-y-5 text-center">
            <Image className="size-32 rounded-full mx-auto" width={200} height={200} src={`${item.picture}`}></Image>
                 <h1 className="text-lg font-semibold">{item.name}</h1>
                 <p>{item.message}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>


         </div>



        </div>
    );
};

export default Feedback;