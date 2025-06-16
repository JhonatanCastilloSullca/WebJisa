import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useTranslation } from "react-i18next";

const DateRangePicker = ({ days = 2 }) => {
    const { t } = useTranslation()

    return (
        <div className="p-4 flex flex-col justify-center items-center pt-4">
            <span className="font-semibold text-lg text-JisaCyan">{t("tours_detail.fecha_visita")}</span>
            <DayPicker mode="range" />
        </div>
    );
};

export default DateRangePicker;
