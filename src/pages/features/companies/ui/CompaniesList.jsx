import CompanyCard from './CompanyCard';
import {useCompanies} from "../context/companies.context.jsx";
import Grid from "../../contacts/ui/Grid/Grid.jsx";

const CompaniesList = ({ onSelect }) => {
    const { companies } = useCompanies();

    return (
        <Grid>
            {companies.map(company => (
                <CompanyCard
                    key={company.id}
                    company={company}
                    onClick={() => onSelect(company)}
                />
            ))}
        </Grid>
    );
};

export default CompaniesList;