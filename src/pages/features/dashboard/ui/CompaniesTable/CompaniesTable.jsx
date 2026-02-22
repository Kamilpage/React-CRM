import { useDashboard } from '../../context/DashboardContext';
import styles from './companiesTable.module.css';
import Table from "../PeopleTable/table/Table.jsx";
import {getFilteredCompanies} from "../../model/dashboard.selectors.js";

const CompaniesTable = () => {
    const {
        companies,
        companiesSearch,
        companiesSort,
        companiesCategory,
        setCompaniesSearch,
        setCompaniesSort,
    } = useDashboard();

    const data = getFilteredCompanies(
        companies,
        companiesSearch,
        companiesSort,
        companiesCategory
    );

    const columns = [
        {
            key: 'name',
            title: 'Company',
            sortable: true,
            render: (row) => (
                <div className={styles.company}>
                    <img src={row.logo} className={styles.logo} />
                    <div>
                        <div className={styles.name}>{row.name}</div>
                        <div className={styles.industry}>{row.industry}</div>
                    </div>
                </div>
            ),
        },
        { key: 'size', title: 'Size', sortable: true },
        {
            key: 'status',
            title: 'Status',
            sortable: true,
            render: (row) => (
                <span
                    className={styles.status}
                    style={{
                        background: row.statusColor,
                        color: row.statusTextColor,
                    }}
                >
                    {row.status}
                </span>
            ),
        },
        { key: 'location', title: 'Location', sortable: true },
        { key: 'owner', title: 'Owner', sortable: true },
        {
            key: 'action',
            title: 'Action',
            render: () => (
                <button className={styles.viewBtn}>View</button>
            ),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.topbar}>
                <input
                    className={styles.search}
                    placeholder="Search company"
                    value={companiesSearch}
                    onChange={(e) => setCompaniesSearch(e.target.value)}
                />
            </div>

            <Table
                rowKey="id"
                data={data}
                columns={columns}
                sorting={companiesSort}
                onSortChange={setCompaniesSort}
            />
        </div>
    );
};

export default CompaniesTable;
