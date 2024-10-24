import React, { useState, useCallback, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css';
import eventsData from '../../utils/events.json';

function Events() {
    const [events, setEvents] = useState(eventsData); // Initialize state with imported JSON data
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [activeStartDate, setActiveStartDate] = useState(new Date());
    const scrollableListRef = useRef(null);

    // Create a Date object for the specified date in local time
    const parseDate = (dateString) => {
        const dateParts = dateString.split('-');
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    };

    // Handle selecting an event from the list
    const handleEventClick = (event) => {
        const eventDate = parseDate(event.date);
        setSelectedDate(eventDate);
        setSelectedEvent(event);
        setActiveStartDate(eventDate); // Update activeStartDate when selecting an event

        // Scroll to the clicked event in the list
        const eventElement = scrollableListRef.current.querySelector(`[data-id='${event.id}']`);
        if (eventElement) {
            eventElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    // Synchronize list selection when a calendar date is clicked
    const handleCalendarChange = useCallback(
        (date) => {
            setSelectedDate(date);
            const matchingEvents = events.filter(
                (event) => parseDate(event.date).toDateString() === date.toDateString()
            );

            if (matchingEvents.length > 0) {
                setSelectedEvent(matchingEvents[0]); // Highlight the first matching event

                const firstEventElement = scrollableListRef.current.querySelector(
                    `[data-id='${matchingEvents[0].id}']`
                );
                if (firstEventElement) {
                    firstEventElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            } else {
                setSelectedEvent(null);
            }
        },
        [events]
    );

    // Handle when the user navigates to a different month/year
    const handleActiveStartDateChange = ({ activeStartDate }) => {
        setActiveStartDate(activeStartDate);
    };

    return (
        <section id="events" className="e-wrapper">
            <div className="paddings innerWidth flexCenter e-container">
                {/* Left side: Scrollable list of events */}
                <div className="list-wrapper">
                    <span className="orangeText">Events</span>
                    <span className="primaryText">Schedule</span>
                    <span className="secondaryText">Description goes here</span>
                    <div className="e-list">
                        <div className="scrollable-list" ref={scrollableListRef}>
                            {events
                                .sort((a, b) => parseDate(a.date) - parseDate(b.date))
                                .map((event) => (
                                    <div
                                        key={event.id}
                                        data-id={event.id} // Add data-id for scrolling
                                        className={`event-item ${selectedEvent?.id === event.id ? 'active' : ''}`}
                                        onClick={() => handleEventClick(event)}
                                    >
                                        <h3>{event.title}</h3>
                                        <p>{parseDate(event.date).toDateString()}</p>
                                        <p>{event.description}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Right side: Calendar */}
                <div className="e-calendar">
                    <Calendar
                        onChange={handleCalendarChange}
                        value={selectedDate}
                        tileClassName={({ date }) =>
                            events.some((event) => parseDate(event.date).toDateString() === date.toDateString())
                                ? 'event-day'
                                : null
                        }
                        activeStartDate={activeStartDate}
                        onActiveStartDateChange={handleActiveStartDateChange}
                    />
                </div>
            </div>
        </section>
    );
}

export default Events;
