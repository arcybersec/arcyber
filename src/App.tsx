import { Button } from "./components/Button"

import { LogInIcon } from "lucide-react"

function App() {
  return (
    <div className="bg-dark-grey h-full w-full">
      <Button 
        text="Join Us"
        onClick={() => console.log('Clicked!')}
        className="rounded-md border-light-green border-2 bg-dark-grey text-light-green hover:bg-light-green w-32 h-14 font-bold text-xl"
        icon={<LogInIcon size={24} />}
      />
    </div>
  )
}

export default App
