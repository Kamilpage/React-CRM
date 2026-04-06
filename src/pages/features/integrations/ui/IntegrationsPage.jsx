import React, { useState, useEffect } from 'react';
import IntegrationCard from './IntegrationCard';
import IntegrationDetails from './IntegrationDetails';
import {getIntegrations} from "../model/integrations.api.js";
import TopbarLayout from "../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import Grid from "../../contacts/ui/Grid/Grid.jsx";
import Modal from "../../../../shared/modals/Modal/Modal.jsx";

const IntegrationsPage = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getIntegrations().then(setData);
    }, []);

    return (
        <>

            <TopbarLayout
                left={<h1>Integrations</h1>}
            />
            <div style={{marginLeft: "248px"}}>

            <Grid>
                {data.map(item => (
                    <IntegrationCard
                        key={item.id}
                        integration={item}
                        onClick={() => setSelected(item)}
                    />
                ))}
            </Grid>

            <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
                {selected && <IntegrationDetails integration={selected} />}
            </Modal>
            </div>
        </>
    );
};

export default IntegrationsPage;