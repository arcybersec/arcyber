

interface BentoGridTileProps{
    icon: React.ReactNode
    title: string,
    description?: string,
    lines: number,
    cols: number,
    bgHighlight: boolean,
    borderHighlight: boolean,
    rounded: boolean,
}

const BentoGridTile : React.FC<BentoGridTileProps> = (props : BentoGridTileProps) =>{
    return(
        <div 
            className={`
            col-span-${props.cols} line-clamp-${props.lines} 
            border-2 ${props.borderHighlight ? "border-primary" : "border-txt"}
            ${props.bgHighlight ? "bg-primary" : "bg-transparent"}
            bg-opacity-20
            ${props.rounded ? "rounded-md" : "rounded-none"}
            flex flex-col items-center`}
        >
            <h1>Heloo</h1>
        </div>
    )
}


export default BentoGridTile