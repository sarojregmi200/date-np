import { usePicker } from "../hooks/usePicker";

export const WeekRow = () => {
    const { pickerState } = usePicker();
    const locale = pickerState.locale;

    const weekNames = locale === "en"
        ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        : locale === "ne"
            ? ["आइतबार", "सोमबार", "मंगलबार", "बुधबार", "बृहस्पतिबार", "शुक्रबार", "शनिबार"]
            : [];

    return (
        <>
            {weekNames.map((name, index) => {
                return (
                    <div key={index} className="w-full h-full grid place-items-center font-medium text-gray-500 text-sm tracking-wide">
                        {name}
                    </div>
                )
            })}
        </>
    )
}
