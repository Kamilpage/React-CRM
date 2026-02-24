import googleIcon from '../../../../assets/icons/companies/google.svg';
import slackIcon from '../../../../assets/icons/companies/slack.svg';
import productHuntIcon from '../../../../assets/icons/companies/productHunt.svg';
import tripAdvisorIcon from '../../../../assets/icons/companies/tripadvisor.svg';
import wordpressIcon from '../../../../assets/icons/companies/wordpress.svg';
import zendeskIcon from '../../../../assets/icons/companies/zendesk.svg';





export const topCompanies = [
    {
        id: 'product-hunt',
        name: 'Product Hunt',
        logo: productHuntIcon,
        change: 5,
        trend: 'up',
    },
    {
        id: 'google',
        name: 'Google',
        logo: googleIcon,
        change: 2,
        trend: 'up',
    },
    {
        id: 'wordpress',
        name: 'WordPress',
        logo: wordpressIcon,
        change: 1,
        trend: 'up',
    },
    {
        id: 'tripadvisor',
        name: 'Tripadvisor',
        logo: tripAdvisorIcon,
        change: 3,
        trend: 'down',
    },
    {
        id: 'slack',
        name: 'Slack',
        logo: slackIcon,
        change: 2,
        trend: 'down',
    },
    {
        id: 'zendesk',
        name: 'Zendesk',
        logo: zendeskIcon,
        change: 3,
        trend: 'down',
    },
];
