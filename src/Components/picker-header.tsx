import { CALENDAR } from "../../data/locale";
import { usePicker } from "../hooks/usePicker";

const PickerHeader = () => {
    const { pickerState, updatePickerMonth } = usePicker();
    const { activeMonth, activeDate, activeYear, locale } = pickerState;

    const currentDate = new Date(activeYear, activeMonth, activeDate.getDate());

    const month = locale === "en"
        ? CALENDAR.AD.months[currentDate.getMonth()]
        : CALENDAR.BS.months[currentDate.getMonth()];

    const year = locale === "en"
        ? currentDate.getFullYear()
        : "NP"

    const handleMonthChange = (changeDirection: "next" | "previous") => {
        const newMonth = changeDirection === "next"
            ? activeMonth + 1
            : activeMonth - 1;

        console.log({
            activeMonth,
            newMonth
        })

        updatePickerMonth(newMonth);
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div
                className="left h-8 w-8 rounded-sm cursor-pointer hover:bg-gray-200 flex items-center justify-center"
                onClick={() => handleMonthChange("previous")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </div>
            <div className="wrapper space-x-2">
                <span>
                    {month?.EN}
                </span>
                <span>
                    {year}
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
