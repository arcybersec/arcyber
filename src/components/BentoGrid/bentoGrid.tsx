import { ReactNode } from "react"


interface BentoGridProps{
    lines: number,
    cols: number,
    children: ReactNode,
}

const BentoGrid:React.FC<BentoGridProps> = (props : BentoGridProps) => {
    return(
        <div className={`w-[90vw] h-[90vh] p-10 grid grid-cols-${props.cols} grid-rows-${props.lines} gap-x-3 gap-y-3`}>
            {props.children}
        </div>
    )
}


export default BentoGrid