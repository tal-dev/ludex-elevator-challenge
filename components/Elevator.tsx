import React, { useEffect, useState } from "react"
import Building from "./Building"
import Dashboard from "./Dashboard"

const Elevator = () => {
    const floors = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    const [currentFloor, setCurrentFloor] = useState(1)
    const [targetFloor, setTargetFloor] = useState(1);
    const [isMoving, setIsMoving] = useState(false)
    const [tenantRequests, setTenantrequests] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentFloor < targetFloor) {
                setCurrentFloor(prevFloor => prevFloor + 1);
                setIsMoving(true)
            } else if (currentFloor > targetFloor) {
                setCurrentFloor(prevFloor => prevFloor - 1);
                setIsMoving(true)
            } else {
                clearInterval(interval); // Stop interval once currentFloor reaches targetFloor
                setIsMoving(false)
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount or re-render
    }, [currentFloor, targetFloor]);


    return (
        <div className="container">
            <Building floors={floors} currentFloor={currentFloor} setTargetFloor={setTargetFloor} />
            <Building floors={floors} currentFloor={currentFloor} setTargetFloor={setTargetFloor} />
            <Dashboard currentFloor={currentFloor} isMoving={isMoving} />
        </div>
    )
}

export default Elevator