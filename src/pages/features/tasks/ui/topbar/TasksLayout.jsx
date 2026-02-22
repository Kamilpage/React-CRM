// src/pages/features/tasks/layout/TasksLayout.jsx

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {useTasks} from "../../context/TasksContext.jsx";
import TasksTopbar from "./TasksTopbar.jsx";
import AddTaskModal from "../modals/AddTaskModal/AddTaskModal.jsx";


const TasksLayout = () => {
    // управление модалкой
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [defaultStatus, setDefaultStatus] = useState("planned");

    // сортировка, фильтры — глобальные для всех трех views
    const {
        sortBy, setSortBy,
        filters, setFilters
    } = useTasks();

    // обработчик "Add Task" в правом верхнем углу
    const handleOpenAdd = () => {
        setDefaultStatus("planned"); // глобальная кнопка всегда planned
        setIsAddOpen(true);
    };

    return (
        <div style={{ width: "100%" }}>

            {/* Топбар: Tabs + Sort/Filter + Add Task */}
            <TasksTopbar
                onOpenAddModal={handleOpenAdd}
                sortBy={sortBy}
                setSortBy={setSortBy}
                filters={filters}
                setFilters={setFilters}
            />

            {/* Текущее View (Kanban, List, Table) */}
            <Outlet />

            {/* Модалка создания задачи */}
            <AddTaskModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                defaultStatus={defaultStatus}
            />
        </div>
    );
};

export default TasksLayout;