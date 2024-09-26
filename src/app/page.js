"use client"
export const dynamic = "force-dynamic"
import Banners from "@/components/Banners/Banners";
import Contact from "@/components/Contact/Contact";
import Featured from "@/components/Featured/Featured";
import Feedback from "@/components/Feedback/Feedback";
import Subjects from "@/components/Subjects/Subjects";
import TutionType from "@/components/Tution Types/TutionType";
import Upcoming from "@/components/Upcoming/Upcoming";
import WebsiteWork from "@/components/WebsiteWork/WebsiteWork";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..


export default function Home() {

  useEffect(()=>{


    AOS.init();



  },[])




  return (
    <div>
      <Banners></Banners>
      <WebsiteWork></WebsiteWork>
      <TutionType></TutionType>
      
      <Subjects></Subjects>

      <Featured></Featured>

      <Feedback></Feedback>

      <Contact></Contact>
      <Upcoming></Upcoming>
    
    </div>
  );
}
