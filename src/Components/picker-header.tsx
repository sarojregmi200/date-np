import { CALENDAR } from "../../data/locale";
import { cn } from "../../utils/clsx";
import { convertFromADToBS } from "../../utils/conversion";
import { usePicker } from "../hooks/usePicker";

const PickerHeader = () => {
    const { pickerState, updatePickerMonth, togglePickerMode, changePickerLocale } = usePicker();
    const { activeMonth, selectedDate: activeDate, activeYear, locale } = pickerState;

    const currentDate = new Date(activeYear, activeMonth, activeDate.getDate());
    const currentNepaliDate = pickerState.locale === "ne"
        ? currentDate
        : convertFromADToBS(currentDate);

    const monthName = locale === "en"
        ? CALENDAR.AD.months[currentDate.getMonth()]
        : CALENDAR.BS.months[currentNepaliDate.getMonth()];

    const year = locale === "en"
        ? currentDate.getFullYear()
        : currentNepaliDate.getFullYear()

    const handleMonthChange = (changeDirection: "next" | "previous") => {
        const newMonth = changeDirection === "next"
            ? activeMonth + 1
            : activeMonth - 1;

        updatePickerMonth(newMonth);
    }

    const handleMonthClick = () => {
        togglePickerMode("month", "date");
    }

    const handleYearClick = () => {
        togglePickerMode("year", "date");
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div
                className="left h-8 w-8 rounded-sm cursor-pointer hover:bg-gray-200 flex items-center justify-center"
                onClick={() => handleMonthChange("previous")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </div>
            <div className="wrapper space-x-2 cursor-pointer">
                <span onClick={handleMonthClick} className="hover:underline">
                    {monthName?.EN}
                </span>
                <span onClick={handleYearClick} className="hover:underline">
                    {year}
                </span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-md h-6 w-16 text-sm">
                <span
                    onClick={() => { changePickerLocale("en") }}
                    className={cn(
                        "cursor-pointer h-8 w-8 grid place-items-center  rounded-md",
                        locale === "en"
                            ? "bg-white drop-shadow-sm"
                            : "bg-transparent opacity-60"
                    )}>
                    AD
                </span>

                <span
                    onClick={() => { changePickerLocale("ne") }}
                    className={cn(
                        "cursor-pointer h-8 w-8 grid place-items-center  rounded-md",
                        locale === "ne"
                            ? "bg-white drop-shadow-sm"
                            : "bg-transparent opacity-60"
                    )}>
                    BS
                </span>

            </div>

            <div
                className="right h-8 w-8 rounded-sm cursor-pointer hover:bg-gray-200 flex items-center justify-center"
                onClick={() => handleMonthChange("next")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
        </div>
    )
}

export default PickerHeader;
