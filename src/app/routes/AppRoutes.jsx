import { Routes, Route, Navigate } from 'react-router-dom';

import TasksLayout from '@app/layout/TasksLayout/TasksLayout.jsx';
import NotesLayout from '@app/layout/NotesLayout/NotesLayout.jsx';

import DashboardLayout from '@pages/features/dashboard/DashboardLayout.jsx';
import Dashboard from '@pages/features/dashboard/Dashboard.jsx';

import KanbanBoard from '@pages/features/tasks/ui/kanban/KanbanBoard.jsx';
import { ListView } from '@pages/features/tasks/ui/list/ListView/ListView.jsx';
import TableView from '@pages/features/tasks/ui/table/TableView.jsx';

import NotesGrid from '@pages/features/notes/ui/NotesGrid/NotesGrid.jsx';

import AnalyticsLayout from '@pages/features/analytics/ui/AnalyticsLayout/AnalyticsLayout.jsx';
import ActivityBoard from '@pages/features/analytics/ui/Tabs/Activity/ActivityBoard.jsx';
import SalesBoard from '@pages/features/analytics/ui/Tabs/Sales/SalesBoard.jsx';

import ContactsLayout from '@pages/features/contacts/layouts/ContactsLayout.jsx';
import ContactsKanban from '@pages/features/contacts/ui/kanban/ContactsKanban.jsx';
import ContactsList from '@pages/features/contacts/ui/list/ContactsList.jsx';
import ContactsTable from '@pages/features/contacts/ui/table/ContactsTable.jsx';
import ContactsGrid from '@pages/features/contacts/ui/grid/ContactsGrid.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
        </Route>

        <Route path="/tasks" element={<TasksLayout />}>
            <Route index element={<Navigate to="kanban" replace />} />
            <Route path="kanban" element={<KanbanBoard />} />
            <Route path="list" element={<ListView />} />
            <Route path="table" element={<TableView />} />
        </Route>

        <Route path="/notes" element={<NotesLayout />}>
            <Route index element={<NotesGrid />} />
        </Route>

        <Route path="/analytics" element={<AnalyticsLayout />}>
            <Route index element={<Navigate to="activity" replace />} />
            <Route path="activity" element={<ActivityBoard />} />
            <Route path="sales" element={<SalesBoard />} />
        </Route>

        <Route path="/contacts" element={<ContactsLayout />}>
            <Route index element={<Navigate to="kanban" replace />} />
            <Route path="kanban" element={<ContactsKanban />} />
            <Route path="list" element={<ContactsList />} />
            <Route path="table" element={<ContactsTable />} />
            <Route path="grid" element={<ContactsGrid />} />
        </Route>
    </Routes>
);

export default AppRoutes;
