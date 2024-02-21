import { useContext, useEffect} from "react";
import { Button } from "../Button"
import { PlusCircle } from "lucide-react";
import { NavbarContext } from "../../context/NavbarContext";
import { scrollToSection } from "./scrollToSection";
interface NavbarProps {
    
}

export const Navbar: React.FC<NavbarProps> = () => {


    const context = useContext(NavbarContext);


    if (!context) {
        return null;
    }
    const { section, updateSection } = context;

    

   

    useEffect(() => {
        
        const checkedScrolledSection = () => {  
            console.log(section)

            const sections = document.querySelectorAll(".section");
            console.log(sections)
            
            if(!sections) return;

            sections.forEach(section => {

                if(!section.getBoundingClientRect()) return;
                
                const rect = section.getBoundingClientRect();

                const sectionCenter = rect.top + rect.height / 2;

                if (sectionCenter > 0 && sectionCenter < window.innerHeight) {
                    updateSection(section.id);
                }

                console.log(section.id, rect.top, rect.bottom, window.innerHeight)
            })

        }

        window.addEventListener("scroll", checkedScrolledSection);

        checkedScrolledSection();

        return () => {
            window.removeEventListener("scroll", checkedScrolledSection);
        }
    },[])
    
    return (
        <div className={`w-full h-20 fixed flex items-center justify-between px-6 backdrop-blur-sm`}>
            <div className="text-4xl font-bold text-white hover:cursor-pointer"
                 onClick={()=>{updateSection("home"); scrollToSection("home", updateSection )}}
            >
                <h1>arcyber</h1>
            </div>

            <div className="flex items-center justify-center gap-x-10">
                
                <a className={`
                    font-medium
                    duration-500 ease-in-out
                    hover:cursor-pointer
                    ${section == "home" ? "text-primary text-2xl" : "text-xl text-white"}
                `}
                onClick={()=>{updateSection("home"); scrollToSection("home", updateSection)}}
                >
                    Home
                </a>

                <a  className={`
                    font-medium
                    duration-500 ease-in-out
                    hover:cursor-pointer
                    ${section == "about" ? "text-primary text-2xl" : "text-xl text-white"}
                `}
                    onClick={()=>{updateSection("about"); scrollToSection("about", updateSection)}}
                >
                    About
                </a>

                <a className={`
                    font-medium
                    duration-500 ease-in-out
                    hover:cursor-pointer    
                    ${section == "teams" ? "text-primary text-2xl" : "text-xl text-white"}
                `}>
                    Teams
                </a>

                <Button
                    text='Join Us'  
                    icon={<PlusCircle/>}  
                    onClick={() => window.open("https://forms.gle/hQNyB6wrCX2NmtPs9")}
                    className='bg-transparent rounded-md text-xl text-primary font-medium border-2 border-primary hover:text-bgr hover:bg-primary  transition duration-200 ease-in-out w-32 h-10'
                />
            </div>

        </div>
    )
}