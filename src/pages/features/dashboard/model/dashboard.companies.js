import googleIcon from '../../../../assets/icons/companies/google.svg';
import slackIcon from '../../../../assets/icons/companies/slack.svg';
import tripAdvisorIcon from '../../../../assets/icons/companies/tripadvisor.svg';
import zendeskIcon from '../../../../assets/icons/companies/zendesk.svg';



export const DASHBOARD_COMPANIES = [
    {
        id: 1,
        name: 'Slack Technologies',
        industry: 'SaaS',
        size: '250+',
        status: 'Active',
        statusColor: '#e8f5e9',
        statusTextColor: '#4caf50',
        location: 'San Francisco',
        owner: 'Robert Fox',
        logo: slackIcon,
    },
    {
        id: 2,
        name: 'Zendesk',
        industry: 'Music',
        size: '500+',
        status: 'Active',
        statusColor: '#e8f5e9',
        statusTextColor: '#4caf50',
        location: 'Stockholm',
        owner: 'Cody Fisher',
        logo: zendeskIcon,
    },
    {
        id: 3,
        name: 'Google',
        industry: 'Search engine',
        size: '1000+',
        status: 'Inactive',
        statusColor: '#fdecea',
        statusTextColor: '#f44336',
        location: 'Los Gatos',
        owner: 'Albert Flores',
        logo: googleIcon,
    },
    {
        id: 4,
        name: 'Trip Advisor',
        industry: 'Adventure',
        size: '300+',
        status: 'Active',
        statusColor: '#e8f5e9',
        statusTextColor: '#4caf50',
        location: 'New York',
        owner: 'Arlene McCoy',
        logo: tripAdvisorIcon,
    },
];
