import { CALENDAR } from "../../data/locale";
import { cn } from "../../utils/clsx";
import {
    getStartingDayOfMonth,
    getTotalDaysInMonth
} from "../../utils/helpers";
import { areDatesEqual } from "../../utils/validators";
import { usePicker } from "../hooks/usePicker";
import Day from "./day";
import Month from "./month";
import { WeekRow } from "./week-row";

const PickerBody = () => {
    const { pickerState } = usePicker();
    const { today, activeDate, activeYear, activeMonth, locale } = pickerState;

    const thisMonthtotalDays = getTotalDaysInMonth({ date: new Date(activeYear, activeMonth, activeDate.getDate()), locale });
    const thisMonthStartDay = getStartingDayOfMonth({ date: new Date(activeYear, activeMonth, activeDate.getDate()), locale });
    const prevMonthTotalDays = getTotalDaysInMonth({ date: new Date(activeYear, activeMonth - 1, activeDate.getDate()), locale });

    const plotablePrevMonthDays = thisMonthStartDay;

    const TrailingPrevMonthDays = () => {
        return [...Array(plotablePrevMonthDays)].map((_, index) => {
            const date = prevMonthTotalDays - (plotablePrevMonthDays - (index + 1));
            const isNotActive = !areDatesEqual(new Date(activeYear, activeMonth - 1, date), activeDate);

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
                date={new Date(activeYear, activeMonth, index + 1)}
                key={index}
            />
        })
    }

    const PrecidingNxtMonthDays = () => {
        const lastDateDay = new Date(activeYear, activeMonth, thisMonthtotalDays).getDay() + 1;
        const PrecidingDays = 7 - lastDateDay;

        return [...Array(PrecidingDays)].map((_, index) => {
            const isNotActive = !areDatesEqual(new Date(activeYear, activeMonth - 1, index + 1), activeDate);

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
        return ("Month Picker")
    }

    const YearPickerBody = () => {
        if (pickerState.mode !== "year")
            return null

        return "Year Picker"
    }

    return (
        <div className="flex items-center justify-between w-full min-h-72">
            <DatePickerBody />
            <MonthPickerBody />
            <YearPickerBody />
        </div>
    )
}

export default PickerBody;
