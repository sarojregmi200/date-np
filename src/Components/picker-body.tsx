import type { ReactNode } from "react";
import { MAX_AD_YEAR, MAX_BS_YEAR, MIN_AD_YEAR, MIN_BS_YEAR } from "../../data/constants";
import { CALENDAR } from "../../data/locale";
import { cn } from "../../utils/clsx";
import {
    getEndingDayOfMonth,
    getStartingDayOfMonth,
    getTotalDaysInMonth
} from "../../utils/helpers";
import { areDatesEqual } from "../../utils/validators";
import { usePicker } from "../hooks/usePicker";
import Day from "./day";
import Month from "./month";
import { WeekRow } from "./week-row";

const PickerBody = () => {
    const { pickerState, updatePickerMonth, updatePickerMode, updatePickerYear } = usePicker();
    const { today, selectedDate, activeYear, activeMonth, locale } = pickerState;

    const thisMonthtotalDays = getTotalDaysInMonth({ date: new Date(activeYear, activeMonth, 1), locale });
    const thisMonthStartDay = getStartingDayOfMonth({ date: new Date(activeYear, activeMonth, 1), locale });
    const thisMonthEndDay = getEndingDayOfMonth({ date: new Date(activeYear, activeMonth, thisMonthtotalDays), locale })
    const prevMonthTotalDays = getTotalDaysInMonth({ date: new Date(activeYear, activeMonth - 1, 1), locale });

    const plotablePrevMonthDays = thisMonthStartDay;

    const TrailingPrevMonthDays = () => {
        return [...Array(plotablePrevMonthDays)].map((_, index) => {
            const date = prevMonthTotalDays - (plotablePrevMonthDays - (index + 1));
            const isNotActive = !areDatesEqual(new Date(activeYear, activeMonth - 1, date), selectedDate);

            return <Day
                date={new Date(activeYear, activeMonth - 1, date)}
                key={index}
                className={cn(isNotActive && "bg-gray-50 opacity-50")}
            />
        })
    }

    const ThisMonthDays = () => {
        return [...Array(thisMonthtotalDays)].map((_, index) => {
            return <Day
                // TODO: Extend the date with custom class so that it doesnot
                // round off when in Nepali Date 
                date={new Date(activeYear, activeMonth, index + 1)}
                key={index}
            />
        })
    }

    const PrecidingNxtMonthDays = () => {
        const PrecidingDays = 6 - thisMonthEndDay;

        return [...Array(PrecidingDays)].map((_, index) => {
            const isNotActive = !areDatesEqual(new Date(activeYear, activeMonth - 1, index + 1), selectedDate);

            return <Day
                date={new Date(activeYear, activeMonth + 1, index + 1)}
                key={index}
                isToday={index + 1 === today.getDate()}
                className={cn(isNotActive && "bg-gray-50 opacity-50")}
            />
        })
    }

    /**
     * Conditionally render if mode is set to date.
     */
    const DatePickerBody = () => {
        if (pickerState.mode !== "date")
            return null;

        return (
            <Month>
                <WeekRow />
                <TrailingPrevMonthDays />
                <ThisMonthDays />
                <PrecidingNxtMonthDays />
            </Month>)
    }

    const MonthPickerBody = () => {
        if (pickerState.mode !== "month")
            return null

        let monthsNames: string[] = [];
        if (pickerState.locale === "en") {
            // TODO: Add support for translation and language.
            monthsNames = Object.values(CALENDAR.AD.months).map(month => month);
        } else {
            monthsNames = Object.values(CALENDAR.BS.months).map(month => month);
        }

        const handleMonthChange = (month: number) => {
            // changing the month
            updatePickerMonth(month);

            // changing the mode to date
            updatePickerMode("date");
        }

        return (
            <div className="grid grid-cols-2  grid-rows-6 gap-1 items-center w-full h-72 text-sm font-light">
                {monthsNames.map((month, index) => {
                    return <button
                        key={index}
                        tabIndex={0}
                        className={cn(
                            "flex items-center justify-center text-sm rounded-sm px-2 bg-gray-50 h-full cursor-pointer",
                            "hover:bg-gray-100",
                            index === activeMonth && "bg-gray-900 text-white hover:bg-gray-800",
                        )}
                        onClick={() => handleMonthChange(index)}
                    >
                        {month}
                    </button>
                })}
            </div>
        )
    }

    const YearPickerBody = () => {
        if (pickerState.mode !== "year")
            return null

        const minYear = pickerState.locale === "en" ? MIN_AD_YEAR : MIN_BS_YEAR;
        const maxYear = pickerState.locale === "en" ? MAX_AD_YEAR : MAX_BS_YEAR;

        const handleYearChange = (year: number) => {
            // changing the year
            updatePickerYear(year);

            // changing the mode to date
            updatePickerMode("month");
        }

        const yearsOptions: ReactNode[] = [];
        for (let i = minYear; i <= maxYear; i++) {
            const element = (
                <button
                    key={i}
                    tabIndex={0}
                    className={cn(
                        "flex items-center justify-center text-sm rounded-sm px-2 bg-gray-50 h-10 cursor-pointer",
                        "hover:bg-gray-100",
                        i === activeYear && "bg-gray-900 text-white hover:bg-gray-800",
                    )}
                    onClick={() => handleYearChange(i)}
                >
                    {i}
                </button>
            )

            yearsOptions.push(element);
        }

        return (
            <div className="grid grid-cols-3 gap-1 items-center w-full h-72 text-sm font-light">
                {yearsOptions}
            </div>
        )
    }

    return (
        <div className="flex items-center justify-between w-full min-h-72 overflow-auto">
            <DatePickerBody />
            <MonthPickerBody />
            <YearPickerBody />
        </div>
    )
}

export default PickerBody;
