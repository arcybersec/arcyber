import { Flag } from "lucide-react"
import CompetitionTile from "../components/CompetitionTile";

const AboutUs : React.FC = () => {
    return(
        <>
            <div className="section w-full h-[100vh] p-10 flex flex-col items-center justify-center bg-bgr" id="about">
                <h1 className="text-8xl font-black text-txt"><span className="text-primary">~$ </span>Who are we?</h1>
                <h2 className="text-txt w-[70%] text-5xl mt-10 text-center mb-10 font-medium">
                    Where <span className="font-black text-primary">coding</span> meets <span className="font-black text-primary">cybersecurity</span> excellence. Unleash your potential in a hands-on,
                    <span className="font-black text-primary"> collaborative</span> environment guided by industry experts. 
                    Join a community dedicated to mastering the art of secure coding. 
                    Your journey to becoming a <span className="font-black text-primary">cyber defender </span>starts here</h2>
            </div>

            {/*bento grid*/}
            <div className="w-full h-[100vh] mt-[100vh] p-10 flex flex-col items-center justify-center bg-bgr">
                <h1 className="text-8xl font-black text-txt"><span className="text-primary">~$ </span>What we do?</h1>
                    <div className="w-[60%] h-[90%] grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 grid-rows-3">
                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Flag className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">CTF's</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Participating in CTF challenges</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow bg-primary border-2 border-primary bg-opacity-15 row-span-2 col-span-2 justify-center flex flex-col items-center p-10">
                            <Flag className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">CTF's</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Interesting challenges</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow border-gray-400 border-2 bg-bgr  flex flex-col justify-center items-center p-10">
                            <Flag className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">CTF's</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Interesting challenges</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow border-gray-400 border-2 bg-bgr flex flex-col justify-center items-center p-10">
                            <Flag className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">CTF's</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Interesting challenges</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow bg-primary col-span-2  flex flex-col justify-center items-center p-10">
                            <Flag className="text-bgr w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-bgr">CTF's</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-bgr">Interesting challenges</p>
                        </div>
                    </div>

                   
                    <h1 className="text-8xl font-black text-txt mt-[20vh]"><span className="text-primary">~$ </span>Competitions</h1>
                    <div
                        className="flex flex-row w-full h-auto p-10 items-center justify-center mb-[100vh]"
                    >
                        <CompetitionTile>
                            <img className="w-[90%] h-auto" src="https://unbreakable.ro/wp-content/uploads/2024/01/logo-unbreakable.png"/>
                        </CompetitionTile>
                        <CompetitionTile>
                        <img className="w-[90%] h-auto" src="https://www.basecybersecurity.com/wp-content/uploads/2018/12/logo-1-e1556187266657.png"/>
                        </CompetitionTile>
                        <CompetitionTile>
                            <Flag className="text-primary w-28 h-28"/>
                        </CompetitionTile>
                    </div>
            </div>
        </>
    )
}


export default AboutUs