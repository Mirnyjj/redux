import "./board.css"


const BoardLayout = ({ onClick, buttonState }) => {
    return (
        <div className="header">
            {buttonState.map((elem, index) => (
                <button className="cell" onClick={() => onClick(index)} key={index}>
                    {elem}
                </button>))}
        </div>
    )
}

export const Board = (props) => {
    return <BoardLayout {...props} />
}
