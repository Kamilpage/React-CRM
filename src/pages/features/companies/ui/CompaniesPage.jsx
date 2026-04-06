import React, { useState } from 'react';
import CompaniesList from './CompaniesList';
import CompanyDetails from './CompanyDetails';
import {CompaniesProvider} from "../context/companies.context.jsx";
import TopbarLayout from "../../../../app/layout/TopbarLayout/TopbarLayout.jsx";
import Modal from "../../../../shared/modals/Modal/Modal.jsx";

const CompaniesPage = () => {
    const [selected, setSelected] = useState(null);

    return (

        <CompaniesProvider>
            <TopbarLayout
                left={<h1>Companies</h1>}
                right={<button>+ Add Company</button>}
            />
            <div style={{marginLeft: "248px"}}>

            <CompaniesList onSelect={setSelected} />

            <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
                {selected && <CompanyDetails company={selected} />}
            </Modal>
            </div>

        </CompaniesProvider>
    );
};

export default CompaniesPage;