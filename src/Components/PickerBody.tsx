import { usePicker } from "../hooks/usePicker";
import { WeekRow } from "./week-row";

const PickerBody = () => {
    const { pickerState } = usePicker();
    const { currentDate, locale } = pickerState;

    const totalDays = locale === "en"
        ? currentDate.getDate()
        : currentDate.getDate();

    return (
        <div className="flex items-center justify-between w-full">
            <WeekRow />
        </div>
    )
}


export default PickerBody;
