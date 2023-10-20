import { Inter } from "@next/font/google";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import CountdownTimer from "@/components/countdowntimer";
import VideoCollage from "@/components/videoCollage";
import DummyTask from "@/components/dummyTask";
// import SocialMediaIntegration from "@/components/socialMediaIntegration";

export default function Home() {
  const targetDate = "2023-11-04T23:59:59"; // Set your target date and time
  return (
    <div
      className="space-y-40 md:mx-10 mx-2  min-h-screen flex flex-col justify-center items-center"
      // style={{backgroundImage: "url('/fresher.jpg')"}}
    >
      <section>
        <h1 className="md:text-5xl text-3xl mt-40 text-cyan-500  font-bold mb-4 animate-bounce text-center">
          Welcome to
        </h1>
        <h2 className="md:text-6xl text-5xl text-white text-center font-extrabold mb-8 animate-fade-in-down animate-pulse ">
          THE ALGORITHM 2K23
        </h2>
        <p className="text-lg text-cyan-500 text-center mb-12 animate-fade-in-up">
          Freshers party for CSE (Core) students.
        </p>
        <Link
          href="https://chat.whatsapp.com/Gkk156DYDs6DRULMaQPE03"
          target="_blank"
          className="flex justify-center"
        >
          <span className="bg-white  hover:bg-green-500 text-purple-900 hover:text-white font-semibold text-xl py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-4">
            <BsWhatsapp />
            <span>Join Whatsapp Group</span>
          </span>
        </Link>
      </section>
      <section>
        {/* Other content of your page */}
        <CountdownTimer targetDate={targetDate} />
      </section>

      <section id="Tasks">
        <DummyTask />
      </section>

      <section id="glimpse" className=" body-font">
        <div className="container px-5 md:py-16 mx-auto flex flex-wrap">
          <div className="flex justify-center w-full mb-20 flex-wrap">
            <span className=" text-5xl text-cyan-500 ">
              Glimpse of Algorithm 2K22
            </span>
            {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably havent
        heard of them man bun deep jianbing selfies heirloom.
      </p> */}
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap md:w-1/2">
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="1.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="6.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="3.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="4.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="5.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <VideoCollage/>
      </section>
      
      <section id="Venue" className="flex justify-center flex-col">
        <span className="text-center text-5xl text-cyan-500">Venue</span>
        <div className="px-5 py-10 mx-auto flex flex-col md:flex-row  items-center">
          <div className="md:w-2/3  bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="md:w-full absolute inset-0 map flex"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7054395679625!2d81.24519280885679!3d21.164117613244834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293ea8ec9d49e5%3A0x846e6ae744238b5d!2sThe%20Roman%20Park%20-%20Best%20Wedding%20Destination%20Hotel!5e0!3m2!1sen!2sin!4v1697731574405!5m2!1sen!2sin"
            ></iframe>
            {/* <style jsx>
        {`.map{filter: grayscale(1) contrast(1.2) opacity(0.4);}`}
        </style> */}
            <div
              className="bg-white cursor-pointer relative flex flex-wrap py-6 rounded shadow-lg md:opacity-50 md:hover:opacity-100 invisible
         "
            >
              <div className=" md:p-20 text-black">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 ">
                  Dr. Bhaskar Dental Clinic, Sadar Bazaar, Bhatapara,
                  Chhattisgarh 493118
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+917999747067</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col space-y-8 items-center  text-4xl text-white my-4">
            <span className="font-bold">The Roman Park</span>
            <span className="text-2xl text-cyan-500">Time : 9:00AM Onwards</span>
            <span className="font-bold">Contact Info :</span>
            <span className="font-bold text-xl">Saket Yadav : <span className="text-cyan-500">+919575099298</span></span>
            <span className="font-bold text-xl">Saurabh Verma : <span className="text-cyan-500">+919407904097</span></span>
          </div>
        </div>
      </section>
      +

    </div>
  );
}
