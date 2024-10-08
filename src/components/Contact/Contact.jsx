import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button";



  

const Contact = () => {
    return (
        <div className="mt-16 dark:text-black ">

<div className="text-center">

<h1 className="text-3xl font-bold">Ask Us Any Question</h1>
</div>

  <div className="flex flex-col lg:flex-row items-center  p-5 gap-16 mt-2">

    <div className="w-full lg:w-1/2">
        <div className="mt-5 text-xl font-semibold text-center">
            <h1>Frequently Asked Questions</h1>
        </div>
    <Accordion className="mt-5" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>How does the platform connect students with tutors?</AccordionTrigger>
    <AccordionContent>
    The platform allows students to search for tutors based on subjects and location, while tutors can request teaching opportunities by creating a profile with their expertise.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What features ensure a smooth user experience on the website?</AccordionTrigger>
    <AccordionContent>
    Features include a simple CRUD system for profile management, user-friendly search filters, and responsive design, all optimized with Next.js and Tailwind CSS.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>How is security handled on the Tutor Media website?</AccordionTrigger>
    <AccordionContent>
    Security is ensured through user authentication, with JWT implemented to safeguard user data and protect access to the platforms features.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>How does the platform handle booking and scheduling?</AccordionTrigger>
    <AccordionContent>
    The platform allows students to book lessons based on tutor availability. Tutors can set their schedules, and students can choose convenient times from the tutors available slots.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>

    <div  className="w-full lg:w-1/2">
    <div className="mt-5 text-xl font-semibold text-center">
            <h1>Leave Your Message Here</h1>
        </div>

        <form className="mt-2 space-y-3">

        <div className="space-y-2">
            <Label htmlFor="name">Your Name:</Label>
            <Input type="text" placeholder="Name" />
            </div>

            <div className="space-y-2">
            <Label htmlFor="email">Your Email Address:</Label>
            <Input type="email" placeholder="Email" />
            </div>

            <div  className="space-y-2 w-full">
            <Label htmlFor="message">Your Message:</Label>
            <Textarea placeholder="Type your message here." />
      <Button className="w-full" variant="destructive">Send message</Button>

            </div>

        </form>
    </div>

  </div>
            
        </div>
    );
};

export default Contact;