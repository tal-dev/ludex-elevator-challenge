type DashboardProps = {
    currentFloor: number,
    isMoving: boolean
}

const Dashboard = ({currentFloor, isMoving}: DashboardProps) => {
    return (
        <div className="dashboard">
            <div>{`Floor: ${currentFloor}`}</div>
            <div>{`Moving: ${isMoving ? "Yes" : "No"}`}</div>
        </div>
    )
}

export default Dashboard