import contact from '../../../../assets/icons/dashboard/contact.svg'
import company from '../../../../assets/icons/dashboard/company.svg'
import emailIcon from '../../../../assets/icons/dashboard/emailIcon.svg'
import ongoingTasks from '../../../../assets/icons/dashboard/ongoingTasks.svg'



export const DASHBOARD_CARDS = [
    {
        id: 'people',
        title: 'Total People',
        key: 'totalPeople',
        icon: contact,
        modalDescription: 'Количество контактов в вашей CRM',
    },
    {
        id: 'companies',
        title: 'Total Companies',
        key: 'totalCompanies',
        icon: company,
        modalDescription: 'Активные и зарегистрированные компании в CRM',
    },
    {
        id: 'email',
        title: 'Email Open Rate',
        key: 'openRate',
        icon: emailIcon,
        modalDescription: 'Процент открытых писем за период',
        format: (v) => `${v}%`,
    },
    {
        id: 'upcoming',
        title: 'Upcoming Tasks',
        key: 'upcomingTasks',
        icon: ongoingTasks,
        modalDescription: 'Ближайшие задачи и поручения',
        format: (v) => `${v} Tasks`,
    }
];