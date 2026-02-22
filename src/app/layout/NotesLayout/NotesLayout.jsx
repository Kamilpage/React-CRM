import { Outlet } from 'react-router-dom';
import {NotesProvider} from "../../../pages/features/notes/contex/NotesContex.jsx";
import NotesTopbar from "../../../pages/features/notes/ui/NotesTopbar/NotesTopbar.jsx";

const NotesLayout = () => {
    return (
        <NotesProvider>
            <NotesTopbar />
            <Outlet />
        </NotesProvider>
    );
};

export default NotesLayout;
