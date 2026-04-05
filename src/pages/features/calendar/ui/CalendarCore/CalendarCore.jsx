import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useCalendar} from "../../context/CalendarContext.jsx";

const Calendar = () => {
    const { events, openModal } = useCalendar();

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"

            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}

            events={events}

            dateClick={(info) => {
                openModal(info.dateStr);
            }}
        />
    );
};

export default Calendar;