import FilterIcon from "../../../assets/icons/topbar/FilterIcon.jsx";
import SortIcon from "../../../assets/icons/topbar/SortIcon.jsx";

const SortFilterGroup = ({ onSort, onFilter }) => (
    <>
        <button onClick={onSort}>
            <SortIcon />
            Sort By
        </button>

        <button onClick={onFilter}>
            <FilterIcon />
            Filter
        </button>
    </>
);

export default SortFilterGroup;