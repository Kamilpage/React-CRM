const IntegrationDetails = ({ integration }) => {
    return (
        <div>
            <h2>{integration.name}</h2>
            <p>{integration.description}</p>

            {integration.connected ? (
                <>
                    <button>Disconnect</button>
                    <button>Settings</button>
                </>
            ) : (
                <button>Connect</button>
            )}
        </div>
    );
};
export default IntegrationDetails;