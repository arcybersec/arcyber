import { Minus } from "lucide-react"
import { useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaSignature } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { MdEmail } from "react-icons/md";

const Footer:React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };
    return(
        <>
         <div className="fixed w-auto pl-12 pr-12 h-auto rounded-tl-xl rounded-tr-xl bg-secondary bottom-0  flex flex-col items-center ">

            <Minus className={`w-12 h-12 text-txt ${show ? "mt-[-0.5rem]" : ""} cursor-pointer ` }  onClick={()=>{setShow(!show); console.log(show)}}/>

            <div className={`flex flex-row items-center justify-center pb-5 gap-x-10 mb-[-0.5rem]  ${show ? "visible" : "collapse"}`}>
                <a href="https://github.com/arcybersec" target="_blank">
                    <FaGithub className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <a href="https://www.instagram.com/arcybersec/" target="_blank">
                    <FaInstagram className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <a href="https://discord.gg/5b4yspHZYx" target="_blank">
                    <FaDiscord className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <a href="mailto:arcyber@proton.me">
                    <MdEmail className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </a>
                <button onClick={()=>openModal()}>
                    <FaSignature className="text-5xl text-txt hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out"/>
                </button>
            </div>

        </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="PGP Key" body="key-here"/>
        </>
       
    )
}

export default Footer