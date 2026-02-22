import DashboardIcon from "../../../assets/react/sidebar/DashboardIcon.jsx";
import NotificationsIcon from "../../../assets/react/sidebar/NotificationsIcon.jsx";
import NotesIcon from "../../../assets/react/sidebar/NotesIcon.jsx";
import TasksIcon from "../../../assets/react/sidebar/TasksIcon.jsx";
import EmailsIcon from "../../../assets/react/sidebar/EmailsIcon.jsx";
import CalendarsIcon from "../../../assets/react/sidebar/CalendarsIcon.jsx";
import AnalyticsIcon from "../../../assets/react/sidebar/AnalyticsIcon.jsx";
import ContactsIcon from "../../../assets/react/sidebar/ContactsIcon.jsx";
import CompaniesIcon from "../../../assets/react/sidebar/CompaniesIcon.jsx";
import integrationsIcon from "../../../assets/react/sidebar/IntegrationsIcon.jsx";
import SettingsIcon from "../../../assets/react/sidebar/SettingsIcon.jsx";

export const sidebarSections = [
    {
        id: 'main',
        items: [
            { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
            { icon: NotificationsIcon, label: 'Notifications', action: 'openNotifications' },
            { icon: NotesIcon, label: 'Notes', path: '/notes' },
            { icon: TasksIcon, label: 'Tasks', path: '/tasks' },
            { icon: EmailsIcon, label: 'Emails', path: '/emails' },
            { icon: CalendarsIcon, label: 'Calendars', path: '/calendars' }
        ]
    },
    {
        id: 'database',
        title: 'DATABASE',
        items: [
            { icon: AnalyticsIcon, label: 'Analytics', path: '/analytics' },
            { icon: ContactsIcon, label: 'Contacts', path: '/contacts' },
            { icon: CompaniesIcon, label: 'Companies', path: '/companies' }
        ]
    },
    {
        id: 'settings',
        items: [
            { icon: integrationsIcon, label: 'Integrations', path: '/integrations' },
            { icon: SettingsIcon, label: 'Settings', path: '/settings' }
        ]
    }
]
