import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import AddButton from '../../../../../shared/ui/AddButton/AddButton.jsx';
import AddTaskModal from '../modals/AddTaskModal/AddTaskModal.jsx';

import ListIcon from '../../../../../assets/react/topbar/ListIcon.jsx';
import KanbanIcon from '../../../../../assets/react/topbar/KanbanIcon.jsx';
import TableIcon from '../../../../../assets/react/topbar/TableIcon.jsx';

import styles from './tasksTopbar.module.css';

import SortFilterGroup from "../../../../../shared/ui/SortFilterGroup/SortFilterGroup.jsx";
import {useKanban} from "../../context/KanbanContext.jsx";

const taskType = [
    { name: 'List', path: '/tasks/list', Icon: ListIcon },
    { name: 'Kanban', path: '/tasks/kanban', Icon: KanbanIcon },
    { name: 'Table', path: '/tasks/table', Icon: TableIcon }
];


const TasksTopbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { sortBy, setSortBy, filters, setFilters } = useKanban();


    return (
        <>
            <TopbarLayout
                left={
                    <>
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
                                        <p className={isActive ? styles.activeText : ''}>
                                            {name}
                                        </p>
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </>
                }
                right={
                    <>
                        <SortFilterGroup
                            sortItems={[
                                { value: "created", label: "Created" },
                                { value: "due", label: "Due date" },
                                { value: "title", label: "Title (A–Z)" }
                            ]}

                            filterItems={[
                                { value: "tag1", label: "Priority" },
                                { value: "tag2", label: "Bug" },
                                { value: "tag3", label: "Feature" }
                            ]}
                            activeSort={sortBy}
                            activeFilters={filters}
                            onSortChange={setSortBy}
                            onFilterChange={setFilters}
                        />
                        <div className={styles.vertical_line}></div>
                        <AddButton
                            label="+ Add Task"
                            onClick={() => setIsOpen(true)}
                        />
                        <AddTaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                }
            />

            <AddTaskModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default TasksTopbar;
