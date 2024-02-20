import { Button } from "./components/Button"

import { LogInIcon } from "lucide-react"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="bg-bgr h-full w-full">
      <Navbar />
      <Button 
        text="Join Us"
        onClick={() => console.log('Clicked!')}
        className="rounded-md border-primary border-2 bg-dark-grey text-primary hover:bg-primary w-32 h-14 font-bold text-xl"
        icon={<LogInIcon size={24} />}
      />

      <div>
        <section className="bg-white h-[600px] w-full" id="home">

        </section>
        <section className="bg-primary h-[600px] w-full" id="about">

        </section>

        <section className="bg-secondary h-[600px] w-full" id="teams">

        </section>
      </div>
    </div>
  )
}

export default App
