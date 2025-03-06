import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DateRangePicker = ({ days = 2 }) => {


    return (
        <div className="p-4 flex flex-col justify-center items-center pt-4">
            <span className="font-semibold text-lg text-JisaCyan">Fecha de visita</span>
            <DayPicker mode="range" />
        </div>
    );
};

export default DateRangePicker;
