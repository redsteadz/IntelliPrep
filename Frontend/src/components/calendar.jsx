import './Calendar.css';
import React, { useState } from 'react';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const generateCalendar = () => {
        const months = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const calendar = [];
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let day = 1;
        let startingDay = firstDayOfMonth.getDay();

        for (let i = 0; i < 6; i++) {
            let week = [];
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < startingDay) || day > daysInMonth) {
                    week.push(<td key={j}></td>);
                } else {
                    week.push(<td key={j}>{day}</td>);
                    day++;
                }
            }
            calendar.push(<tr key={i}>{week}</tr>);
            if (day > daysInMonth) break;
        }

        return (
            <table>
                <caption>{months[month]} {year}</caption>
                <thead>
                    <tr>
                        {daysOfWeek.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {calendar}
                </tbody>
            </table>
        );
    }

    return (
        <div className="calendar-container">
            {generateCalendar()}
        </div>
    );
}

export default Calendar;
