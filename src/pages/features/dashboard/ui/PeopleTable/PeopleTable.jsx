import { useDashboard } from '../../context/DashboardContext';
import styles from './peopleTable.module.css';
import {getFilteredPeople} from "../../model/dashboard.selectors.js";
import Table from "./table/Table.jsx";

const PeopleTable = () => {
    const {
        people,
        peopleSearch,
        peopleSort,
        setPeopleSearch,
        setPeopleSort,
    } = useDashboard();

    const data = getFilteredPeople(people, peopleSearch, peopleSort);

    const columns = [
        {
            key: 'name',
            title: 'Name',
            sortable: true,
            render: (row) => (
                <div className={styles.person}>
                    <img src={row.avatar} className={styles.avatar} />
                    <div>
                        <div className={styles.name}>{row.name}</div>
                        <div className={styles.email}>{row.email}</div>
                    </div>
                </div>
            ),
        },
        {
            key: 'phone',
            title: 'Phone',
            sortable: true,
        },
        {
            key: 'category',
            title: 'Category',
            sortable: true,
            render: (row) => (
                <span
                    className={styles.badge}
                    style={{
                        background: row.categoryColor,
                        color: row.categoryTextColor,
                    }}
                >
                    {row.category}
                </span>
            ),
        },
        {
            key: 'location',
            title: 'Location',
            sortable: true,
        },
        {
            key: 'gender',
            title: 'Gender',
            sortable: true,
        },
        {
            key: 'action',
            title: 'Action',
            render: () => (
                <div className={styles.actions}>
                    <button className={styles.callBtn}>📞 Call</button>
                    <button className={styles.msgBtn}>💬 Message</button>
                </div>
            ),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.topbar}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search"
                    value={peopleSearch}
                    onChange={(e) => setPeopleSearch(e.target.value)}
                />

                <div className={styles.controls}>
                    <button>Sort By</button>
                    <button>Filter</button>
                </div>
            </div>

            <Table
                rowKey="id"
                data={data}
                columns={columns}
                sorting={peopleSort}
                onSortChange={setPeopleSort}
            />
        </div>
    );
};

export default PeopleTable;
