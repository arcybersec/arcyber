interface CompetitionTileProps{
    children: React.ReactNode;
}

const CompetitionTile:React.FC<CompetitionTileProps> = ({children}) => {
    return(<>
        <div className="bg-transparent w-80 h-80 rounded shadow border-2 ml-10 mr-10  border-gray-400 bg-bgr flex flex-col items-center justify-center p-5">
            {children}
        </div>
    </>)
}

export default CompetitionTile