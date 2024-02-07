import React from "react"

type BuildingProps = {
    floors: number[],
    currentFloor: number,
    setTargetFloor: (floor: number) => void 
}

const Building = ({floors, currentFloor, setTargetFloor}: BuildingProps) => {
    return (
        <div>
            {floors.map(floor => {
                return <div className={`floor ${currentFloor === floor && "currentFloor"}`} onClick={() => setTargetFloor(floor)}>
                    <div className="floor-number">{floor}</div>
                </div>
            })}
        </div>
    )
}

export default Building