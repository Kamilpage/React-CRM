import { Outlet } from 'react-router-dom';
import {NotesProvider} from "./pages/NotesView/NotesTopbar/NotesContex.jsx";
import NotesTopbar from "./pages/NotesView/NotesTopbar/NotesTopbar.jsx";

const NotesLayout = () => {
    return (
        <NotesProvider>
            <NotesTopbar />
            <Outlet />
        </NotesProvider>
    );
};

export default NotesLayout;
