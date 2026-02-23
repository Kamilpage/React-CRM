import TasksTopbar from "../../../pages/features/tasks/ui/topbar/TasksTopbar.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import AddTaskModal from "../../../pages/features/tasks/ui/modals/AddTaskModal/AddTaskModal.jsx";
import {useTasks} from "../../../pages/features/tasks/context/TasksContext.jsx";

const TasksLayout = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [defaultStatus, setDefaultStatus] = useState("planned");
    const openAddTask = (status = "planned") => {
        setDefaultStatus(status);
        setIsAddOpen(true);
    };

    const {
        editTask,
        deleteTask,
        moveTaskTo,
        duplicateTask, sortBy, setSortBy, filters, setFilters
    } = useTasks();

    return (
        <>
            <TasksTopbar
                onAddTask={() => openAddTask("planned")}
                sortBy={sortBy}
                setSortBy={setSortBy}
                filters={filters}
                setFilters={setFilters}
            />

            <Outlet context={{onEditTask: editTask,
                onDeleteTask: deleteTask,
                onMoveTask: moveTaskTo,
                onDuplicateTask: duplicateTask, onOpenAddTask: openAddTask}}/>

            <AddTaskModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                defaultStatus={defaultStatus}
            />
        </>
    );
};

export default TasksLayout;
