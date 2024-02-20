import { Minus } from "lucide-react"
import { useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaSignature } from "react-icons/fa";

const Footer:React.FC = () => {
    const [show, setShow] = useState<boolean>(false);


    return(
        <div className="fixed w-auto pl-12 pr-12 h-auto rounded-tl-xl rounded-tr-xl bg-secondary bottom-0  flex flex-col items-center ">

            <Minus className={`w-12 h-12 text-txt ${show ? "mt-[-0.5rem]" : ""} cursor-pointer ` }  onClick={()=>{setShow(!show); console.log(show)}}/>

            <div className={`flex flex-row items-center justify-center pb-5 gap-x-10 mb-[-0.5rem]  ${show ? "visible" : "collapse"}`}>
                <a href="https://github.com/arcybersec" target="_blank">
                    <FaGithub className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <a href="https://github.com/arcybersec" target="_blank">
                    <FaInstagram className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <a href="https://github.com/arcybersec" target="_blank">
                    <FaDiscord className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <a href="https://github.com/arcybersec" target="_blank">
                    <FaSignature className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
            </div>

        </div>
    )
}

export default Footer