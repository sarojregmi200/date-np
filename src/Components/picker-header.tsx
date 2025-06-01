import { useMemo, type ReactNode } from "react";
import { CALENDAR } from "../../data/locale";
import { cn } from "../../utils/clsx";
import { convertFromADToBS } from "../../utils/conversion";
import { usePicker } from "../hooks/usePicker";

const PickerHeader = () => {
    const { pickerState, togglePickerMode } = usePicker();
    const { activeMonth, selectedDate, activeYear, locale } = pickerState;

    // We are going with current Month middle date 
    // since it is possible that the month we are viewing
    // may have more days than the previous or next month, which will
    // change the month but when the currentDate is calculated with
    // activeyear, activemonth, selectedDate.getDate() it will be the same.
    const currentMonthMiddle = useMemo(
        () => new Date(activeYear, activeMonth, (selectedDate.getDate() / 2)),
        [activeYear, activeMonth, selectedDate]);

    const currentNepaliDate = pickerState.locale === "ne"
        ? currentMonthMiddle
        : convertFromADToBS(currentMonthMiddle);

    const monthName = locale === "en"
        ? CALENDAR.AD.months[currentMonthMiddle.getMonth()]
        : CALENDAR.BS.months[currentNepaliDate.getMonth()];

    const year = locale === "en"
        ? currentMonthMiddle.getFullYear()
        : currentNepaliDate.getFullYear()

    const handleMonthClick = () => {
        togglePickerMode("month", "date");
    }

    const handleYearClick = () => {
        togglePickerMode("year", "date");
    }

    return (
        <div className="flex items-center justify-between w-full">
            {monthSwitcher().previous}
            <div className="wrapper space-x-2 cursor-pointer">
                <span onClick={handleMonthClick} className="hover:underline">
                    {monthName}
                </span>
                <span onClick={handleYearClick} className="hover:underline">
                    {year}
                </span>
            </div>
            {monthSwitcher().next}
            <AD_BS_Switcher />
        </div>
    )
}

const monthSwitcher = (): {
    previous: ReactNode,
    next: ReactNode
} => {
    const { pickerState, updatePickerMonth } = usePicker();
    const { activeMonth } = pickerState;

    const handleMonthChange = (changeDirection: "next" | "previous") => {
        const newMonth = changeDirection === "next"
            ? activeMonth + 1
            : activeMonth - 1;

        updatePickerMonth(newMonth);
    }

    return {
        previous: (
            <div
                className="left h-8 w-8 rounded-sm cursor-pointer hover:bg-gray-200 flex items-center justify-center"
                onClick={() => handleMonthChange("previous")} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </div>),
        next: (
            <div
                className="right h-8 w-8 rounded-sm cursor-pointer hover:bg-gray-200 flex items-center justify-center"
                onClick={() => handleMonthChange("next")} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>)
    }
}

const AD_BS_Switcher = () => {
    const { pickerState, changePickerLocale } = usePicker();
    const { locale } = pickerState;

    return (
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
    )
}

export default PickerHeader;
