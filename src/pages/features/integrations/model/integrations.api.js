export const getIntegrations = async () => {
    return [
        {
            id: 1,
            name: "Telegram",
            description: "Send notifications and messages",
            connected: true,
            logo: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
        },
        {
            id: 2,
            name: "Gmail",
            description: "Sync emails",
            connected: false,
            logo: "https://cdn-icons-png.flaticon.com/512/281/281769.png"
        },
        {
            id: 3,
            name: "Slack",
            description: "Team communication",
            connected: false,
            logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
        }
    ];
};