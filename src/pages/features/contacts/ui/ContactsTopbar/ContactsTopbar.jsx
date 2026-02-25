import React from 'react';
import styles from './contactsTopbar.module.css'
import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import ListIcon from "../../../../../assets/react/topbar/ListIcon.jsx";
import KanbanIcon from "../../../../../assets/react/topbar/KanbanIcon.jsx";
import TableIcon from "../../../../../assets/react/topbar/TableIcon.jsx";
import {NavLink} from "react-router-dom";
import SortFilterGroup from "../../../../../shared/ui/SortFilterGroup/SortFilterGroup.jsx";
import AddButton from "../../../../../shared/ui/AddButton/AddButton.jsx";

const ContactsTopbar = () => {
    const contactType = [
        {name: 'List', path: '/contacts/list', Icon: ListIcon},
        {name: 'Kanban', path: '/contacts/kanban', Icon: KanbanIcon},
        {name: 'Table', path: '/contacts/table', Icon: TableIcon}
    ];
    return (
        <div>
            <TopbarLayout
                left={
                <>
                    <h1>Dashboard</h1>
                    {contactType.map(({name, path, Icon}) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({isActive}) =>
                                isActive ? styles.activeBtn : styles.btn
                            }
                        >
                            {({isActive}) => (
                                <div className={styles.display__type}>
                                    <Icon active={isActive}/>
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
                        <>


                            <div className={styles.vertical_line}></div>
                            <button>add contacts</button>
                            {/*<AddButton label="+ Add Task" onClick={() => onAddTask("planned")}/>*/}
                        </>

                    </>
                }
            />
        </div>
    );
};

export default ContactsTopbar;

