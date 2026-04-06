import { createContext, useContext, useEffect, useState } from 'react';
import {getCompanies} from "../model/companies.api.js";

const CompaniesContext = createContext();

export const CompaniesProvider = ({ children }) => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies().then(setCompanies);
    }, []);

    return (
        <CompaniesContext.Provider value={{ companies }}>
            {children}
        </CompaniesContext.Provider>
    );
};

export const useCompanies = () => useContext(CompaniesContext);