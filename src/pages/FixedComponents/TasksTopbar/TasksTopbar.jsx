import React from 'react';
import styles from './tasksTopbar.module.css'
import {NavLink} from "react-router-dom";
import ListIcon from "../../../assets/icons/topbar/ListIcon.jsx";
import KanbanIcon from "../../../assets/icons/topbar/KanbanIcon.jsx";
import TableIcon from "../../../assets/icons/topbar/TableIcon.jsx";
import FilterIcon from "../../../assets/icons/topbar/FilterIcon.jsx";
import SortIcon from "../../../assets/icons/topbar/SortIcon.jsx";
import AddTaskModal from "./AddTaskModal.jsx";

const TasksTopbar = () => {
const [isOpen, setIsOpen] = React.useState(false);


    const taskType = [
        {
            name: 'List',
            path: '/tasksTopbar/list',
            Icon: ListIcon
        },
        {
            name: 'Kanban',
            path: '/tasksTopbar/kanban',
            Icon: KanbanIcon
        },
        {
            name: 'Table',
            path: '/tasksTopbar/table',
            Icon: TableIcon
        }
    ];
    return (
        <>
            <div>

                <div className={styles.tasks}>
                    <div className={styles.tasks__display}>
                        <h1>Task</h1>
                        {taskType.map(({ name, path, Icon }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? styles.activeBtn : styles.btn
                                }
                            >
                                {({ isActive }) => (
                                    <div className={styles.display__type}>
                                        <Icon active={isActive} />
                                        <p className={isActive ? styles.activeText : ''}>{name}</p>
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </div>
                    <div className={styles.tasks__right}>
                        <button>
                            {<SortIcon />}
                            Sort By
                        </button>
                        <button>
                            {<FilterIcon />}
                                <p>Filter</p>
                                </button>
                        <div className={styles.vertical_line}></div>
                        <button onClick={() => setIsOpen(true)}>
                            + Add Task</button>
                        <AddTaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TasksTopbar;