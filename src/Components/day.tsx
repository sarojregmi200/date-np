import type { HTMLAttributes, MouseEvent } from "react";
import { cn } from "../../utils/clsx";
import { usePicker } from "../hooks/usePicker";
import { areDatesEqual } from "../../utils/validators";

type tdayProps = {
    date: Date,
    disabled?: boolean,
    isToday?: boolean,
    onClick?: (date: Date, e: MouseEvent<HTMLDivElement>) => void,
} & HTMLAttributes<HTMLDivElement>

const Day = (props: tdayProps) => {
    const {
        date: date,
        isToday = false,
        disabled = false,
        className,
        onClick,
        ...rest
    } = props;


    const { updatePickerDay, pickerState } = usePicker();
    const { activeDate } = pickerState;
    const isActive = areDatesEqual(date, activeDate);

    const handlDayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (disabled)
            return;

        onClick?.(date, e);
        updatePickerDay(date);
    }

    return (
        <div
            className={cn(
                "text-center aspect-square rounded-sm items-center justify-center flex text-sm cursor-pointer",
                "hover:bg-gray-200",
                isActive && "bg-gray-900 text-white hover:bg-gray-900",
                disabled && "opacity-50 bg-gray-50",
                className,
            )}
            onClick={handlDayClick}
            {...rest}
        >
            {date.getDate()}
        </div>
    )
}
export default Day;
