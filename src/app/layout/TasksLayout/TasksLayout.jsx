import TasksTopbar from "../../../pages/features/tasks/ui/topbar/TasksTopbar.jsx";
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
