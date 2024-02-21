import { useEffect, useState } from "react";
import { Button } from "./Button"
import { PlusCircle } from "lucide-react";

interface NavbarProps {
    
}

export const Navbar: React.FC<NavbarProps> = () => {

    const [scrolledSection, setScrolledSection] = useState<string>("home");

    useEffect(() => {


        const checkedScrolledSection = () => {

            const sections = document.querySelectorAll("section");

            if(!sections) return;

            sections.forEach(section => {

                if(!section.getBoundingClientRect()) return;
                
                const rect = section.getBoundingClientRect();

                const sectionCenter = rect.top + rect.height / 2;

                if (sectionCenter > 0 && sectionCenter < window.innerHeight) {
                    setScrolledSection(section.id);
                }

                console.log(section.id, rect.top, rect.bottom, window.innerHeight)
            })

        }

        window.addEventListener("scroll", checkedScrolledSection);

        checkedScrolledSection();

        return () => {
            window.removeEventListener("scroll", checkedScrolledSection);
        }
    })
    
    return (
        <div className='w-full h-20 fixed flex items-center justify-between px-6'>
            <div className="text-4xl font-bold text-white">
                arcyber
            </div>

            <div className="flex items-center justify-center gap-x-10">
                
                <a href="#home" className={`
                    font-medium
                    duration-500 ease-in-out
                    ${scrolledSection == "home" ? "text-primary text-2xl" : "text-xl text-white"}
                `}>
                    Home
                </a>

                <a href="#about" className={`
                    font-medium
                    duration-500 ease-in-out
                    ${scrolledSection == "about" ? "text-primary text-2xl" : "text-xl text-white"}
                `}>
                    About
                </a>

                <a href="#teams" className={`
                    font-medium
                    duration-500 ease-in-out
                    ${scrolledSection == "teams" ? "text-primary text-2xl" : "text-xl text-white"}
                `}>
                    Teams
                </a>

                <Button
                    text='Join Us'
                    icon=<PlusCircle/>  
                    onClick={() => window.open("https://forms.gle/hQNyB6wrCX2NmtPs9")}
                    className='bg-transparent rounded-md text-xl text-primary font-medium border-2 border-primary hover:text-bgr hover:bg-primary  transition duration-200 ease-in-out w-32 h-10'
                />
            </div>

        </div>
    )
}