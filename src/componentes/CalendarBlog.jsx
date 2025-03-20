import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const availableDates = [
    { dfecha: "30-03-2025", price: 50 },
    { dfecha: "31-03-2025", price: 55 },
    { dfecha: "31-05-2025", price: 50 },
    { dfecha: "01-06-2025", price: 55 },
    { dfecha: "02-06-2025", price: 60 },
    { dfecha: "10-06-2025", price: 80 },
    { dfecha: "20-06-2025", price: 100 },
];

const dateMap = new Map(
    availableDates.map(({ dfecha, price }) => [
        new Date(dfecha.split("-").reverse().join("-")).toDateString(),
        price,
    ])
);

const CalendarBlog = () => {
    const [value, setValue] = useState(new Date());

    const tileDisabled = ({ date }) => !dateMap.has(date.toDateString());

    const tileContent = ({ date }) => {
        const price = dateMap.get(date.toDateString());
        return price ? <p className="text-lg text-JisaCyan font-bold">${price}</p> : null;
    };

    return (
        <div className="flex justify-center mt-5 max-w-7xl mx-auto">
            <Calendar
                onChange={setValue}
                value={value}
                tileDisabled={tileDisabled}
                tileContent={tileContent}
                className="border border-gray-300 p-2 rounded-md"
            />
        </div>
    )
}

export default CalendarBlog