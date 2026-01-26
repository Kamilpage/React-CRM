import React, { useState } from "react";
import styles from "./sortFilterGroup.module.css";

import SortIcon from "../../../assets/react/topbar/SortIcon.jsx";
import FilterIcon from "../../../assets/react/topbar/FilterIcon.jsx";

const SortFilterGroup = ({
                             sortItems = [],
                             filterItems = [],
                             activeSort,          // 👈 добавили
                             onSortChange,
                             onFilterChange
                         }) => {
    const [sortOpen, setSortOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleSort = (value) => {
        onSortChange?.(value);
        setSortOpen(false);
    };

    const toggleFilter = (value) => {
        const next = selectedFilters.includes(value)
            ? selectedFilters.filter(f => f !== value)
            : [...selectedFilters, value];

        setSelectedFilters(next);
        onFilterChange?.(next);
    };

    return (
        <div className={styles.group}>
            {/* SORT */}
            <div className={styles.dropdownWrapper}>
                <button
                    className={styles.topbarBtn}
                    onClick={() => {
                        setSortOpen(prev => !prev);
                        setFilterOpen(false);
                    }}
                >
                    <SortIcon />
                    Sort
                </button>

                {sortOpen && (
                    <div className={styles.dropdownMenu}>
                        {sortItems.map(item => {
                            const isActive = item.value === activeSort;

                            return (
                                <button
                                    key={item.value}
                                    className={`${styles.option} ${isActive ? styles.activeSort : ""}`}
                                    onClick={() => handleSort(item.value)}
                                >
                                    {item.label}

                                    {isActive && (
                                        <span className={styles.check}>✓</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* FILTER */}
            <div className={styles.dropdownWrapper}>
                <button
                    className={styles.topbarBtn}
                    onClick={() => {
                        setFilterOpen(prev => !prev);
                        setSortOpen(false);
                    }}
                >
                    <FilterIcon />
                    Filter
                </button>

                {filterOpen && (
                    <div className={styles.dropdownMenu}>
                        {filterItems.map(item => {
                            const isActive = selectedFilters.includes(item.value);
                            return (
                                <button
                                    key={item.value}
                                    className={`${styles.option} ${isActive ? styles.active : ""}`}
                                    onClick={() => toggleFilter(item.value)}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SortFilterGroup;
