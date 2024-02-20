import BentoGrid from "./components/BentoGrid/bentoGrid"
import BentoGridTile from "./components/BentoGrid/bentoGridTile"


function App() {
  return (
    <>
      <BentoGrid lines={3} cols={5} >
        <BentoGridTile bgHighlight={false} borderHighlight={true} cols={1} lines={2} rounded={true}/>
        <BentoGridTile bgHighlight={false} borderHighlight={true} cols={1} lines={0} rounded={true}/>
        <BentoGridTile bgHighlight={false} borderHighlight={true} cols={1} lines={0} rounded={true}/>
      </BentoGrid>
    </>
  )
}

export default App
