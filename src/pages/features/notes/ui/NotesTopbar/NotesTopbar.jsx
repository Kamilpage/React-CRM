import React, { useState } from 'react';

import TopbarLayout from "../../../../../app/layout/TopbarLayout/TopbarLayout.jsx";

import AddNotesModal from "../modals/AddNotesModal/AddNotesModal.jsx";
import { useNotes } from "../../contex/NotesContex.jsx";

import styles from "./notesTopbar.module.css";
import SortFilterGroup from "../../../../../shared/ui/SortFilterGroup/SortFilterGroup.jsx";
import AddButton from "../../../../../shared/ui/AddButton/AddButton.jsx";

const NotesTopbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { sortBy, setSortBy, filters, setFilters } = useNotes();

    return (
        <>
            <TopbarLayout
                left={<h1>Notes</h1>}
                right={
                    <div className={styles.rightGroup}>
                        <SortFilterGroup
                            sortItems={[
                                { value: "updated", label: "Last updated" },
                                { value: "created", label: "Created" },
                                { value: "title", label: "Title (A–Z)" }
                            ]}

                            filterItems={[
                                { value: "Weekly", label: "Weekly" },
                                { value: "Product", label: "Product" },
                                { value: "Business", label: "Business" }
                            ]}

                            activeSort={sortBy}
                            activeFilters={filters}

                            onSortChange={setSortBy}
                            onFilterChange={setFilters}
                        />

                        <div className={styles.vertical_line}></div>

                        <AddButton
                            label="+ Add Note"
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                }
            />

            <AddNotesModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default NotesTopbar;
