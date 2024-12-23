import { getStartingDayOfMonth, getTotalDaysInMonth } from "../../utils/helpers";
import { usePicker } from "../hooks/usePicker";
import Day from "./day";
import Month from "./month";
import { WeekRow } from "./week-row";

const PickerBody = () => {
    const { pickerState } = usePicker();
    const { currentDate, locale } = pickerState;

    const thisMonthtotalDays = getTotalDaysInMonth({ date: currentDate, locale });
    const thisMonthStartDay = getStartingDayOfMonth({ date: currentDate, locale });
    const prevMonthTotalDays = getTotalDaysInMonth({ date: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1), locale });

    const plotablePrevMonthDays = thisMonthStartDay;

    const PrecidingPrevMonthDays = () => {
        return [...Array(thisMonthStartDay)].map((_, index) => {
            return <Day
                day={index + 1}
                key={index}
                disabled={true}
                isToday={index + 1 === currentDate.getDate()}
            />
        })
    }
    const ThisMonthDays = () => {
        return [...Array(thisMonthtotalDays)].map((_, index) => {
            return <Day
                day={index + 1}
                key={index}
                disabled={false}
                isToday={index + 1 === currentDate.getDate()}
            />
        })
    }

    const TrailingNxtMonthDays = () => {
        const lastDateDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), thisMonthtotalDays).getDay() + 1;
        const trailingDays = 7 - lastDateDay;

        return [...Array(trailingDays)].map((_, index) => {
            return <Day
                day={index + 1}
                key={index}
                disabled={true}
                isToday={index + 1 === currentDate.getDate()}
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
