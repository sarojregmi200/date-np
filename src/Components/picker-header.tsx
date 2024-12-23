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
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </div>
            <div className="wrapper space-x-2">
                <span>
                    {month.EN}
                </span>
                <span>
                    {year}
                </span>
            </div>
            <div className="right h-8 w-8 rounded-sm bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </div>
        </div>
    )
}

export default PickerHeader;
