import { CALENDAR } from "../../data/locale";
import { usePicker } from "../hooks/usePicker";

const PickerHeader = () => {
    const { pickerState } = usePicker();
    const { currentDate, locale } = pickerState;

    const month = locale === "en"
        ? CALENDAR.AD.months[currentDate.getMonth()]
        : CALENDAR.BS.months[currentDate.getMonth()];

    const year = locale === "en"
        ? currentDate.getFullYear()
        : "NP"

    return (
        <div className="flex items-center justify-between w-full">
            <div className="left h-8 w-8 rounded-sm bg-gray-200 flex items-center justify-center">
                {"<"}
            </div>
            <span>
                {month.EN}
            </span>
            <span>
                {year}
            </span>
            <div className="right h-8 w-8 rounded-sm bg-gray-200 flex items-center justify-center">
                {">"}
            </div>
        </div>
    )
}

export default PickerHeader;
