import { Button } from "./components/Button"

function App() {
  return (
    <div className="bg-dark-grey h-full w-full">
      <Button 
        text="Join Us"
        onClick={() => console.log('Clicked!')}
        className="rounded-md border-light-green border-2 bg-dark-grey text-light-green hover:bg-light-green"
      />
    </div>
  )
}

export default App
