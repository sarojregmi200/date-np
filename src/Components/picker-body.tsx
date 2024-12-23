import { getStartingDayOfMonth, getTotalDaysInMonth } from "../../utils/helpers";
import { usePicker } from "../hooks/usePicker";
import Day from "./day";
import Month from "./month";
import { WeekRow } from "./week-row";

const PickerBody = () => {
    const { pickerState } = usePicker();
    const { today, activeDate, activeYear, activeMonth, locale } = pickerState;

    const thisMonthtotalDays = getTotalDaysInMonth({ date: new Date(activeYear, activeMonth, activeDate.getDate()), locale });
    const thisMonthStartDay = getStartingDayOfMonth({ date: new Date(activeYear, activeMonth, activeDate.getDate()), locale });
    const prevMonthTotalDays = getTotalDaysInMonth({ date: new Date(activeYear, activeMonth, activeDate.getDate()), locale });

    const plotablePrevMonthDays = thisMonthStartDay;

    const PrecidingPrevMonthDays = () => {
        return [...Array(plotablePrevMonthDays)].map((_, index) => {
            const date = prevMonthTotalDays - (plotablePrevMonthDays - index);

            return <Day
                date={new Date(activeYear, activeMonth - 1, date)}
                key={index}
                disabled={true}
            />
        })
    }
    const ThisMonthDays = () => {
        return [...Array(thisMonthtotalDays)].map((_, index) => {
            return <Day
                date={new Date(activeYear, activeMonth, index + 1)}
                key={index}
                disabled={false}
            />
        })
    }

    const TrailingNxtMonthDays = () => {
        const lastDateDay = new Date(activeYear, activeMonth, thisMonthtotalDays).getDay() + 1;
        const trailingDays = 7 - lastDateDay;

        return [...Array(trailingDays)].map((_, index) => {
            return <Day
                date={new Date(activeYear, activeMonth + 1, index + 1)}
                key={index}
                disabled={true}
                isToday={index + 1 === today.getDate()}
            />
        })
    }

    return (
        <div className="flex items-center justify-between w-full">
            <Month>
                <WeekRow />
                <PrecidingPrevMonthDays />
                <ThisMonthDays />
                <TrailingNxtMonthDays />
            </Month>
        </div>
    )
}


export default PickerBody;
