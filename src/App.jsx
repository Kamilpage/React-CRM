import './App.css'
import Sidebar from "./pages/FixedComponents/Sidebar/Sidebar.jsx";
import Topbar from "./pages/FixedComponents/Topbar/Topbar.jsx";
import ListTopbar from "./pages/Display/Lists/ListTopbar/ListTopbar.jsx";
import {Routes, Route} from "react-router-dom";
import TaskUnit from "./pages/Display/Kanban/routing/TaskUnit.jsx";


function App() {
    return (
        <Routes>
            <Route path="/tasks" element={<TaskUnit/>}/>
        </Routes>
    )
}

export default App
