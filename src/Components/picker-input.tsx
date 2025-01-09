import React from "react";
import { cn } from "../../utils/clsx";

type tpickerInputProps = {
    label?: string,
    className?: string
    required?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>;

type tpickerInputImperativeProps = {
} & HTMLInputElement

const PickerInput = React.forwardRef<tpickerInputImperativeProps, tpickerInputProps>((props, ref) => {
    const {
        required = false,
        className,
        label,
        name,
        ...inputProps
    } = props;

    /*
     * This can be seperated into a seperate component but should not be done.
     * since, the dev using this package may have custom label components that 
     * may polute their imports and mistakenly import this component instead of their own.
     */
    const Label = () => {
        if (!label)
            return null;

        if (typeof label === "string")
            return (
                <label htmlFor={name}>
                    {label}
                    <span className="requiredIndicator">
                        {required ? "*" : null}
                    </span>
                </label>
            )
    }

    return (
        <div className="inputContainer">
            <Label />
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
