import { BrainCog, Cpu, Flag, Router, Server } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import CompetitionTile from '../components/CompetitionTile';

export const Competitions: React.FC = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    if(isMobile){
        return (
            <div className='w-full flex justify-center items-center flex-col gap-y-32'>
                
                <div className='w-full flex flex-col items-center justify-center gap-y-8'>
                    <h1 className="text-5xl md:text-7xl text-center font-black text-txt">
                        <span className="text-primary">~$ </span>
                        What we do?
                    </h1>

                    <div className='flex flex-col gap-y-10 w-[70%]'>

                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Flag className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">CTFs</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Solving challenging problems</p>
                        </div>

                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Router className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">Networking</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Learn about complex networks</p>
                        </div>

                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Cpu className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">Computers</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Architecture & Fundamentals</p>
                        </div>


                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <BrainCog className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">Critical Thinking</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Problem solving skills</p>
                        </div>


                    </div>

                </div>

                <div className='w-full flex flex-col items-center justify-center gap-y-8'>
                    <h1 className="text-5xl md:text-7xl text-center font-black text-txt">
                        <span className="text-primary">~$ </span>
                        Competitions
                    </h1>

                    <div className='flex flex-col gap-y-10 w-[70%]'>

                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <img 
                                src="https://www.basecybersecurity.com/wp-content/uploads/2018/12/logo-1-e1556187266657.png"
                                className="w-28 h-28"
                                alt="ROCSC"
                            />
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">ROCSC</h2>
                        </div>

                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <img 
                                src="https://unbreakable.ro/wp-content/uploads/2024/01/logo-unbreakable.png"
                                className="w-32 h-18"
                                alt="Unbreakable"
                            />
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">Unbreakable</h2>
                        </div>

                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Flag className="text-primary w-28 h-28"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">Other CTFs</h2>
                        </div>

                    

                    </div>

                </div>

                
                

            </div>
        )
        
    }

    return (
        <div className="w-full h-[100vh] mt-[100vh] p-10 flex flex-col items-center justify-center bg-bgr">
                <h1 className="text-5xl md:text-7xl font-black text-txt"><span className="text-primary">~$ </span>What we do?</h1>
                    <div className="w-[60%] h-[90%] grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 grid-rows-3">
                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Router className="text-primary w-28 h-28"/>
                            <h2 className="text-2xl mt-2 font-semibold text-white">Networking</h2>
                            <p className="text-lg mt-1 font-semibold text-primary text-center">Learn about complex networks</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow bg-primary border-2 border-primary bg-opacity-15 row-span-2 col-span-2 justify-center flex flex-col items-center p-10">
                            <Flag className="text-primary w-32 h-32"/>
                            <h2 className="text-4xl mt-2 font-semibold mb-2 text-white">CTFs</h2>
                            <p className="text-xl mt-2 font-semibold mb-2 text-primary">Solving challenging problems</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <BrainCog className="text-primary w-28 h-28"/>
                            <h2 className="text-2xl mt-2 font-semibold text-white">Critical Thinking</h2>
                            <p className="text-lg mt-1 font-semibold text-primary text-center">Develop problem solving skills</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow border-2 border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
                            <Cpu className="text-primary w-28 h-28"/>
                            <h2 className="text-2xl mt-2 font-semibold text-white">Computers</h2>
                            <p className="text-lg mt-1 font-semibold text-primary text-center">Architecture & Fundamentals</p>
                        </div>
                        <div className="bg-tranp-4 rounded shadow bg-primary col-span-2  flex flex-col justify-center items-center p-10">
                            <Server className="text-bgr w-28 h-28"/>
                            <h2 className="text-3xl mt-2 font-semibold text-bgr">SysAdmin</h2>
                            <p className="text-xl mt-1 font-semibold text-bgr">Learn how to administrate a system</p>
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
    )
}