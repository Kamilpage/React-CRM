import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './pages/FixedComponents/Sidebar/Sidebar.jsx';
import SearchTop from './pages/FixedComponents/SearchBar/SearchTop.jsx';

import Kanban from './pages/Display/Kanban/Kanban/Kanban.jsx';
import TaskListView from './pages/Display/Lists/TaskListView/TaskListView.jsx';

import TasksLayout from './TasksLayout.jsx';
import NotesLayout from './NotesLayout.jsx';

import NotesDisplay from './pages/NotesView/NotesDisplay/NotesDisplay.jsx';

function App() {
    return (
        <>
            <Sidebar />
            <SearchTop />

            <Routes>
                <Route path="/tasks" element={<TasksLayout />}>
                    <Route index element={<Navigate to="kanban" replace />} />
                    <Route path="kanban" element={<Kanban />} />
                    <Route path="list" element={<TaskListView />} />
                </Route>

                <Route path="/notes" element={<NotesLayout />}>
                    <Route index element={<NotesDisplay />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
