import { NotesProvider } from '@pages/features/notes/contex/NotesContex.jsx';
import { NotificationsProvider } from '@pages/features/notifications/context/NotificationsContext.jsx';

import Sidebar from '@app/layout/Sidebar/Sidebar.jsx';
import SearchTop from '@app/layout/SearchBar/SearchTop.jsx';
import NotificationsModal from '@pages/features/notifications/modal/NotificationsModal.jsx';

import AppRoutes from '@app/routes/AppRoutes.jsx';

function App() {
    return (
        <NotificationsProvider>
            <NotesProvider>
                <Sidebar />
                <SearchTop />
                <NotificationsModal />
                <AppRoutes />
            </NotesProvider>
        </NotificationsProvider>
    );
}

export default App;
