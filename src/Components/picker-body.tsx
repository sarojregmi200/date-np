import { usePicker } from "../hooks/usePicker";
import Day from "./day";
import Month from "./month";
import { WeekRow } from "./week-row";

const PickerBody = () => {
    const { pickerState } = usePicker();
    const { currentDate, locale } = pickerState;

    const totalDays = locale === "en"
        ? currentDate.getDate()
        : currentDate.getDate();

    return (
        <div className="flex items-center justify-between w-full">
            <Month>
                <WeekRow />
                {[...Array(totalDays)].map((_, index) => {
                    return <Day
                        day={index + 1}
                        key={index}
                        disabled={false}
                        isToday={index + 1 === currentDate.getDate()}
                    />
                })}
            </Month>
        </div>
    )
}


export default PickerBody;
