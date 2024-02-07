import React, { useEffect, useState } from "react";
import Building from "./Building";
import Dashboard from "./Dashboard";
import styles from "../styles/Home.module.css";

const Elevator = () => {
    const floors: number[] = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const [currentFloor, setCurrentFloor] = useState<number>(1);
    const [targetFloor, setTargetFloor] = useState<number>(1);
    const [isMoving, setIsMoving] = useState<boolean>(false);
    const [requestedFloors, setRequestedFloors] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentFloor < targetFloor) {
                setCurrentFloor(currentFloor + 1);
                setIsMoving(true);
            } else if (currentFloor > targetFloor) {
                setCurrentFloor(currentFloor - 1);
                setIsMoving(true);
            } else {
                setIsMoving(false);
                clearInterval(interval);
                if (requestedFloors.length > 0) {
                    const nextTargetFloor = requestedFloors.shift();
                    if (nextTargetFloor !== undefined) {
                        setTargetFloor(nextTargetFloor);
                    }
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [currentFloor, targetFloor, requestedFloors]);

    const handleFloorRequest = (floor: number) => {
        if (!requestedFloors.includes(floor)) {
            setRequestedFloors([...requestedFloors, floor]);
        }
    };

    return (
        <div  className={styles.elevatorContainer}>
            <Building floors={floors} currentFloor={currentFloor} handleFloorRequest={handleFloorRequest} />
            <Dashboard currentFloor={currentFloor} isMoving={isMoving} />
        </div>
    );
};

export default Elevator;
