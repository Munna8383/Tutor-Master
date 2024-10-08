import Image from "next/image";


const TutionType = () => {
    return (
        <div className="mt-16 w-11/12 mx-auto dark:text-black">

<div className="text-center">

<h1 className="text-3xl font-bold">Our Tution Types</h1>
</div>

       <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

        <div data-aos="zoom-in" className="shadow-md shadow-slate-800 text-center">
            <div>

                <Image alt="image" className="w-full" src={"https://i.ibb.co.com/MMG3wF4/home.png"} width={300} height={270}/>

            </div>

            <div className="p-2">
                <h1 className="text-lg font-bold">Home Tutor</h1>

                <p className="text-justify">We offer the best home tutoring services, delivering personalized, one-on-one education in the comfort of your home. Our experienced and dedicated tutors create tailored learning plans to meet each students unique needs, ensuring academic improvement, confidence building, and long-term success. We help students excel and reach their full potential.</p>
            </div>
        </div>

        <div data-aos="zoom-in" className="shadow-md shadow-slate-800 text-center">
            <div>

                <Image className="w-full" alt="image" src={"https://i.imghippo.com/files/E4ZI11728395214.png"} width={300} height={270}/>

            </div>

            <div  className="p-2">
                <h1 className="text-lg font-bold">Online Tutor</h1>

                <p className="text-justify">We offer top-quality online tutoring services, combining flexibility with personalized learning. Our expert tutors deliver engaging, interactive lessons tailored to each students unique needs, ensuring progress and academic success. With our online platform, students can learn from the comfort of home, benefiting from focused attention and convenient scheduling for optimal results.</p>
            </div>
        </div>

        <div data-aos="zoom-in" className="shadow-md shadow-slate-800 text-center">
            <div>

                <Image className="w-full" alt="image" src={"https://www.imghippo.com/i/ttFXo1728395253.png"} width={300} height={270}/>

            </div>

            <div  className="p-2"> 
                <h1 className="text-lg font-bold">Group Tutor</h1>

                <p className="text-justify">We provide exceptional group tutoring services designed to foster collaboration and peer learning. Our skilled tutors lead engaging sessions, promoting teamwork and academic excellence. Each group session is carefully structured to address common learning goals, while allowing students to benefit from diverse perspectives, building confidence and improving overall performance.</p>
            </div>
        </div>


       </div>
            
        </div>
    );
};

export default TutionType;