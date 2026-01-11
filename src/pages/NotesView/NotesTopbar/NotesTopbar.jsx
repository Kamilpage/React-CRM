import React, { useState } from 'react';

import TopbarLayout from "../../FixedComponents/TasksTopbar/TopbarLayout.jsx";
import AddButton from '../../ui/AddButton/AddButton.jsx';
import SortIcon from '../../../assets/icons/topbar/SortIcon.jsx';
import FilterIcon from '../../../assets/icons/topbar/FilterIcon.jsx';
import {useNotes} from "./NotesContex.jsx";
import AddNotesModal from "../AddNotesModal/AddNotesModal.jsx";

const NotesTopbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { addNote } = useNotes();

    return (
        <>
            <TopbarLayout
                left={
                    <h1>Notes</h1>
                }
                right={
                    <>
                        <button>
                            <SortIcon />
                            Sort By
                        </button>

                        <button>
                            <FilterIcon />
                            <p>Filter</p>
                        </button>

                        <div className="vertical_line" />

                        <AddButton
                            label="+ Add Note"
                            onClick={() => setIsOpen(true)}
                        />
                    </>
                }
            />

            <AddNotesModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onAdd={addNote}
            />
        </>
    );
};

export default NotesTopbar;