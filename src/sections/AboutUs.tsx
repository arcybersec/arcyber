import { Flag } from "lucide-react"
import CompetitionTile from "../components/CompetitionTile";
import { Competitions } from "./Competitions";

const AboutUs : React.FC = () => {
    return(
            <div className="flex flex-col justify-center items-start gap-y-8 md:mt-52">
            <div className="section w-full p-10 flex flex-col items-center justify-center bg-bgr" id="about">
                <h1 className="text-4xl md:text-7xl font-black text-txt text-center animate__animated animate__fadeInUp"><span className="text-primary">~$ </span>Who are we?</h1>
                <h2 className="text-txt w-[70%] text-3xl md:text-5xl mt-10 text-center mb-10 font-medium">
                    Where <span className="font-black text-primary">coding</span> meets <span className="font-black text-primary">cybersecurity</span> excellence. Unleash your potential in a hands-on,
                    <span className="font-black text-primary"> collaborative</span> environment guided by industry experts. 
                    Join a community dedicated to mastering the art of secure coding. 
                    Your journey to becoming a <span className="font-black text-primary">cyber defender </span>starts here</h2>
            </div>

            {/*bento grid*/}
            <Competitions/>
        </div>
    )
}


export default AboutUs