import React from 'react';
import styles from './tasksTopbar.module.css'

const TasksTopbar = () => {
    const [taskType, setTaskType] = React.useState([{
        icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75 8.75L16.25 8.75C16.5952 8.75 16.875 8.47018 16.875 8.125L16.875 5C16.875 4.65482 16.5952 4.375 16.25 4.375L3.75 4.375C3.40482 4.375 3.125 4.65482 3.125 5L3.125 8.125C3.125 8.47018 3.40482 8.75 3.75 8.75Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.75 15.625L16.25 15.625C16.5952 15.625 16.875 15.3452 16.875 15L16.875 11.875C16.875 11.5298 16.5952 11.25 16.25 11.25L3.75 11.25C3.40482 11.25 3.125 11.5298 3.125 11.875L3.125 15C3.125 15.3452 3.40482 15.625 3.75 15.625Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        , name: 'List'
    }, {icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 10.6818V3.48485C8.75 3.28611 8.47018 3.125 8.125 3.125L5 3.125C4.65482 3.125 4.375 3.28611 4.375 3.48485L4.375 10.6818C4.375 10.8806 4.65482 11.0417 5 11.0417H8.125C8.47018 11.0417 8.75 10.8806 8.75 10.6818Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.625 16.25V3.75C15.625 3.40482 15.3452 3.125 15 3.125L11.875 3.125C11.5298 3.125 11.25 3.40482 11.25 3.75V16.25C11.25 16.5952 11.5298 16.875 11.875 16.875H15C15.3452 16.875 15.625 16.5952 15.625 16.25Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        , name: 'Kanban'},
        {icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.375H17.5V15C17.5 15.1658 17.4341 15.3247 17.3169 15.4419C17.1997 15.5592 17.0407 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 8.125H17.5" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 11.875H17.5" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.875 8.125V15.625" stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            , name: 'Table'}]);
    return (
        <>
            <div>

                <div className={styles.tasks}>
                    <div className={styles.tasks__display}>
                        <h1>Task</h1>
                        {
                            taskType.map((item, index) => (
                                <div className={styles.display__type} key={index}>
                                    {item.icon}
                                    <a href="#">{item.name}</a>
                                </div>))
                        }
                    </div>
                    <div className={styles.tasks__right}>
                        <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 8H12" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M1.5 5H14.5" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M6.5 11H9.5" stroke="#727272" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            Sort By
                        </button>
                        <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.63037 3H13.3698C13.4667 3 13.5615 3.02814 13.6426 3.08099C13.7238 3.13384 13.7879 3.20914 13.8271 3.29772C13.8663 3.38631 13.8789 3.48437 13.8634 3.57999C13.8479 3.6756 13.8049 3.76466 13.7398 3.83634L9.63013 8.35697C9.54646 8.449 9.5001 8.56892 9.5001 8.6933V12.2324C9.5001 12.3147 9.47977 12.3958 9.44093 12.4683C9.40209 12.5409 9.34594 12.6028 9.27745 12.6484L7.27745 13.9818C7.20215 14.032 7.11463 14.0608 7.02424 14.0652C6.93384 14.0695 6.84396 14.0493 6.76417 14.0066C6.68438 13.9639 6.61767 13.9003 6.57116 13.8227C6.52466 13.745 6.5001 13.6562 6.5001 13.5657V8.6933C6.5001 8.56892 6.45373 8.449 6.37007 8.35697L2.2604 3.83634C2.19524 3.76466 2.15231 3.6756 2.13681 3.57999C2.12131 3.48437 2.13393 3.38631 2.17311 3.29772C2.2123 3.20914 2.27638 3.13384 2.35755 3.08099C2.43873 3.02814 2.53351 3 2.63037 3V3Z"
                                    stroke="#727272" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Filter
                        </button>
                        <div className={styles.vertical_line}></div>
                        <button>+ Add Task</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TasksTopbar;