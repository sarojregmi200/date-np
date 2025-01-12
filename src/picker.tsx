import { useRef, useState, type ComponentProps, type PropsWithoutRef } from "react";
import { cn } from "../utils/clsx";
import DirectionAwareContainer from "./Components/helpers/direction-aware-container";
import PickerBody from "./Components/picker-body";
import PickerHeader from "./Components/picker-header";
import PickerInput from "./Components/picker-input";
import { PickerProvider, usePicker } from "./hooks/usePicker";
import "./index.css";

type tpropsWithoutInput = {
    /**
     * Note:
     * You should have `shouldShowInput` set to true inorder to
     * give input props
     */
    inputProps?: never;
    shouldShowInput?: false
}

type tpropsWithInput = {
    /**
     * customize input with input specific props.
     * visit: #docs for more information on this.
     */
    inputProps: ComponentProps<typeof PickerInput>

    /**
     * Specify whethere to show the picker input or not
     * @defaults to true
     */
    shouldShowInput?: boolean
}

export type tpickerProps = {
    /** 
     * className for styling the main picker
     */
    className?: string;

    /**
     * Provide individual styling to different components.
     */
    classNames?: {
    }

} & (tpropsWithInput | tpropsWithoutInput);

const Picker = (props: tpickerProps) => {
    const {
        shouldShowInput = true,
        className,
        inputProps: pickerInputProps = {},
    } = props

    const pickerInputRef = pickerInputProps?.ref ?? null;

    let PickerContent = () => {
        const pickerState = usePicker().pickerState;
        const shouldShowPicker = pickerState.isVisible;

        if (shouldShowPicker)
            return (
                <div className={cn(
                    "fixed flex flex-col gap-0.5 w-72 h-max bg-white drop-shadow-sm p-2.5 rounded-md",
                    className)}>
                    <PickerHeader />
                    <PickerBody />
                </div>
            )
        return null;
    }

    return (
        <PickerProvider>
            {shouldShowInput
                ? <PickerInput ref={pickerInputRef} {...pickerInputProps} />
                : null}

            <PickerContent />
        </PickerProvider>
    )
}

{/*
const DirectionAwarePickerContent = () => {
    return (
        <DirectionAwareContainer
            activateWith="ref"
            activatorRef={pickerInputRef}
            onOutsideClick={() => setShowPicker(false)}
        />
    )
} */}

export default Picker;
