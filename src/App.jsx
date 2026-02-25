import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './app/layout/Sidebar/Sidebar.jsx';
import SearchTop from './app/layout/SearchBar/SearchTop.jsx';

import KanbanBoard from './pages/features/tasks/ui/kanban/KanbanBoard.jsx';

import TasksLayout from './app/layout/TasksLayout/TasksLayout.jsx';
import NotesLayout from './app/layout/NotesLayout/NotesLayout.jsx';

import NotesGrid from './pages/features/notes/ui/NotesGrid/NotesGrid.jsx';
import { NotesProvider } from "./pages/features/notes/contex/NotesContex.jsx";
import DashboardLayout from "./pages/features/dashboard/DashboardLayout.jsx";
import Dashboard from "./pages/features/dashboard/Dashboard.jsx";
import AnalyticsLayout from "./pages/features/analytics/ui/AnalyticsLayout/AnalyticsLayout.jsx";
import ActivityBoard from "./pages/features/analytics/ui/Tabs/Activity/ActivityBoard.jsx";
import SalesBoard from "./pages/features/analytics/ui/Tabs/Sales/SalesBoard.jsx";
import {NotificationsProvider} from "./pages/features/notifications/context/NotificationsContext.jsx";
import NotificationsModal from "./pages/features/notifications/modal/NotificationsModal.jsx";
import TableView from "./pages/features/tasks/ui/table/TableView.jsx";
import {ListView} from "./pages/features/tasks/ui/list/ListView/ListView.jsx";
import ContactsLayout from "./pages/features/contacts/layouts/ContactsLayout.jsx";
import ContactsKanban from "./pages/features/contacts/views/ContactsKanban.jsx";


function App() {
    return (
        <NotificationsProvider>
            <NotesProvider>

                <Sidebar />
                <SearchTop />
                <NotificationsModal />

                <Routes>

                    {/* Dashboard */}
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<Dashboard />} />
                    </Route>

                    {/* Tasks */}
                    <Route path="/tasks" element={<TasksLayout />}>
                        <Route index element={<Navigate to="kanban" replace />} />
                        <Route path="kanban" element={<KanbanBoard />} />
                        <Route path="list" element={<ListView />} />
                        <Route path="table" element={<TableView />} />
                    </Route>

                    {/* Notes */}
                    <Route path="/notes" element={<NotesLayout />}>
                        <Route index element={<NotesGrid />} />
                    </Route>

                    {/* Analytics */}
                    <Route path="/analytics" element={<AnalyticsLayout />}>
                        <Route index element={<Navigate to="activity" replace />} />
                        <Route path="activity" element={<ActivityBoard />} />
                        <Route path="sales" element={<SalesBoard />} />
                    </Route>

                    <Route path="/contacts" element={<ContactsLayout />}>
                    <Route index element={<Navigate to="kanban" replace />} />
                    <Route path="kanban" element={<ContactsKanban />} />
                    {/*<Route path="list" element={<ListView />} />*/}
                    {/*<Route path="table" element={<TableView />} />*/}
                    </Route>

                </Routes>

            </NotesProvider>
        </NotificationsProvider>
    );
}

export default App;
