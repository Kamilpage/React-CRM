import contact from '../../../../assets/icons/dashboard/contact.svg'
import company from '../../../../assets/icons/dashboard/company.svg'
import emailIcon from '../../../../assets/icons/dashboard/emailIcon.svg'
import ongoingTasks from '../../../../assets/icons/dashboard/ongoingTasks.svg'



export const DASHBOARD_CARDS = [
    {
        id: 'email',
        title: 'Email Sent',
        key: 'sendRate',
        icon: emailIcon,
        modalDescription: 'Процент отправленных писем за период',
        format: (v) => `${v} Mail`,
    },
    {
        id: 'companies',
        title: 'Active Companies',
        key: 'activeCompanies',
        icon: company,
        modalDescription: 'Активные и зарегистрированные компании в CRM',
        format: (v) => `${v} Company`,

    },
    {
        id: 'contact',
        title: 'Total Contact',
        key: 'totalContact',
        icon: contact,
        modalDescription: 'Количество контактов в вашей CRM',
        format: (v) => `${v} Contact`,

    },
    {
        id: 'ongoing',
        title: 'Ongoing Task',
        key: 'ongoingTask',
        icon: ongoingTasks,
        modalDescription: 'Ближайшие задачи и поручения',
        format: (v) => `${v} Tasks`,
    }
];