import type { HTMLAttributes } from "react";
import { cn } from "../../utils/clsx";

{/* <div key={index} className="w-20 h-10 rounded-sm flex items-center gap-2.5 justify-center"> */ }

type tdayProps = {
    day: number,
    disabled?: boolean,
    isToday?: boolean,
} & HTMLAttributes<HTMLDivElement>

const Day = (props: tdayProps) => {
    const {
        day,
        isToday = false,
        disabled = false,
    } = props;

    return (
        <div className={cn(
            "text-center aspect-square rounded-sm items-center justify-center flex text-sm cursor-pointer",
            "hover:bg-gray-200",
            isToday && "bg-gray-900 text-white hover:bg-gray-900",
            disabled && "opacity-50 bg-gray-50 cursor-not-allowed",
        )}>
            {day}
        </div>
    )
}
export default Day;
