import DashboardIcon from "../../../assets/icons/sidebar/DashboardIcon.jsx";
import NotificationsIcon from "../../../assets/icons/sidebar/NotificationsIcon.jsx";
import NotesIcon from "../../../assets/icons/sidebar/NotesIcon.jsx";
import TasksIcon from "../../../assets/icons/sidebar/TasksIcon.jsx";
import EmailsIcon from "../../../assets/icons/sidebar/EmailsIcon.jsx";
import CalendarsIcon from "../../../assets/icons/sidebar/CalendarsIcon.jsx";
import AnalyticsIcon from "../../../assets/icons/sidebar/AnalyticsIcon.jsx";
import ContactsIcon from "../../../assets/icons/sidebar/ContactsIcon.jsx";
import CompaniesIcon from "../../../assets/icons/sidebar/CompaniesIcon.jsx";
import integrationsIcon from "../../../assets/icons/sidebar/IntegrationsIcon.jsx";
import SettingsIcon from "../../../assets/icons/sidebar/SettingsIcon.jsx";

export const sidebarSections = [
    {
        id: 'main',
        items: [
            { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
            { icon: NotificationsIcon, label: 'Notifications', path: '/notifications' },
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
