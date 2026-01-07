import './App.css'
import Sidebar from "./pages/FixedComponents/Sidebar/Sidebar.jsx";
import SearchTop from "./pages/FixedComponents/SearchBar/SearchTop.jsx";
import {Routes, Route} from "react-router-dom";
import Kanban from "./pages/Display/Kanban/Kanban/Kanban.jsx";
import TasksTopbar from "./pages/FixedComponents/TasksTopbar/TasksTopbar.jsx";
import ListUnit from "./pages/Display/Lists/ListUnit/ListUnit.jsx";
import NotesUnit from "./pages/Display/Notes/NotesUnit/NotesUnit.jsx";


function App() {
    return (
        <>
            <Sidebar/>
            <SearchTop/>
            <TasksTopbar/>
            <Routes>
                <Route path="/tasksTopbar/kanban" element={<Kanban/>}/>
                <Route path="/tasksTopbar/list" element={<ListUnit/>}/>
                <Route path="/notes" element={<NotesUnit/>}/>
            </Routes>
        </>
    )
}

export default App
