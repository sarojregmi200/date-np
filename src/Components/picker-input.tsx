import { forwardRef, type RefObject } from "react";
import { cn } from "../../utils/clsx";

type tpickerInputProps = {
    className?: string
    required?: boolean
}

type tpickerInputImperativeProps = {
} & HTMLInputElement

const PickerInput = forwardRef<tpickerInputImperativeProps, tpickerInputProps>((props, ref) => {
    const {
        required = false,
        className,
        ...inputProps
    } = props;

    return (
        <div className="inputContainer">
            <input
                required={required}
                ref={ref}
                className={cn("", className)}
                {...inputProps}
            />
        </div>
    )
})

export default PickerInput;
