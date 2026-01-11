import TasksTopbar from "./pages/FixedComponents/TasksTopbar/TasksTopbar.jsx";
import { Outlet } from "react-router-dom";

const TasksLayout = () => {
    return (
        <>
            <TasksTopbar />
            <Outlet />
        </>
    );
};

export default TasksLayout;
