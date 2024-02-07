import styles from "../styles/Home.module.css";

type BuildingProps = {
    floors: number[],
    currentFloor: number,
    handleFloorRequest: (floor: number) => void 
}

const Building = ({floors, currentFloor, handleFloorRequest}: BuildingProps) => {
    return (
        <div>
            {floors.map(floor => {
                return <div className={`${styles.floor} ${currentFloor === floor && styles.currentFloor}`} onClick={() => handleFloorRequest(floor)}>
                    <div>{floor}</div>
                </div>
            })}
        </div>
    )
}

export default Building