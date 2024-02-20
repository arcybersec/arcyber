import { useEffect, useState } from "react"
import { Button } from "./components/Button";
import { BadgeInfo, PlusCircle} from "lucide-react";
import Footer from "./components/Footer/Footer";

import GreenRadial from "./assets/images/greenRadial.png"
import WhiteRadial from "./assets/images/WhiteRadial.png"
import { FaFlag, FaServer } from "react-icons/fa";
import { Navbar } from "./components/Navbar";

const subtitleOptions = [
  "bad opsec fella?",
  "forever pwned",
  "git gud!"
]


function App() {

  const [subtitle, setSubtitle]= useState<string>();

  useEffect(()=>{
      const randomSubtitle = subtitleOptions[Math.floor(Math.random() * subtitleOptions.length)];
      setSubtitle(randomSubtitle);
  });

  return (
    <div className="bg-dark-grey h-full w-full flex flex-col items-center justify-start bg-bgr">
      <Navbar/>
       <FaServer className="fixed left-[8rem] top-[10rem] text-white text-[25rem] opacity-5 transform -rotate-45 collapse md:visible"/>
       <FaFlag className="fixed right-[8rem] top-[12rem] text-primary text-[25rem] opacity-5 transform rotate-45 collapse md:visible"/>

       <img src={GreenRadial} className="fixed left-[-30rem] bottom-[-30rem] opacity-40 collapse md:visible"/>
       <img src={WhiteRadial} className="fixed right-[-30rem] bottom-[-30rem] opacity-40 collapse md:visible"/>

        <h1 className="md:text-[13rem] text-[10rem] font-black text-txt mt-20">AR<span className="text-primary">C</span></h1>

        <h2 className="md:text-[2.5rem] text-[1.5rem] md:mt-[-3rem] text-primary">root@arcyber:"
          <span className="text-txt">
            {subtitle}
          </span>
        "</h2>
      
     

     


      <div className="flex md:flex-row flex-col md:gap-x-20 gap-y-10 mt-16">
        <Button
          icon={<BadgeInfo className="w-8 h-8 "/>}
          className="bg-txt rounded-md text-2xl font-medium text-bgr hover:bg-bgr hover:text-txt hover:border-2 hover:border-txt transition duration-200 ease-in-out"
          onClick={()=>""}
          text="More info"
          key={1}
        />

        <Button
          icon={<PlusCircle className="w-8 h-8 "/>}
          className="bg-transparent rounded-md text-2xl text-primary font-medium border-2 border-primary hover:text-bgr hover:bg-primary  transition duration-200 ease-in-out"
          onClick={()=>""}
          text="Join Us"
          key={1}
        />
      </div>

      <Footer/>
    </div>
  )
}

export default App
