import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type tpickerContextType = {
    pickerState: {
        today: Date;
        isActive: boolean;
        locale: "en" | "ne";
        activeDate: Date,
        activeMonth: number,
        activeYear: number,
        mode: "date" | "month" | "year",
    };
    setPickerState: Dispatch<SetStateAction<tpickerContextType["pickerState"]>>;
}

const PickerContext = createContext<tpickerContextType | null>(null);

const usePicker = () => {
    const pickerContextValue = useContext(PickerContext);
    if (!pickerContextValue) {
        throw new Error("usePicker must be used within a PickerProvider");
    }

    const { setPickerState } = pickerContextValue;

    const updatePickerDay = (day: Date) => {
        setPickerState((prevState) => {
            return {
                ...prevState,
                activeDate: day,
            }
        })
    }

    const updatePickerMonth = (month: number) => {
        let yearOffset = 0;
        let monthOffset = 0;
        if (month > 11) {
            yearOffset = Math.floor(month / 11);
            monthOffset = month % 11 - 1;
        } else {
            monthOffset = month;
        }

        setPickerState((prevState) => {
            return {
                ...prevState,
                activeYear: prevState.activeYear + yearOffset,
                activeMonth: monthOffset,
            }
        })
    }

    /**
     * Toggles the picker mode to `toggleIf` param if the previous mode is not equal to 
     * `toggleIf` param else it will toggle to the provided `defaultMode`.
     */
    const togglePickerMode = (toggleIf: tpickerContextType["pickerState"]["mode"], defaultMode: tpickerContextType["pickerState"]["mode"]) => {
        setPickerState((prevState) => {
            return {
                ...prevState,
                mode: prevState.mode === toggleIf ? defaultMode : toggleIf,
            }
        })
    }

    return {
        ...pickerContextValue,
        updatePickerDay,
        updatePickerMonth,
        togglePickerMode,
    };
}

const PickerProvider = ({ children }: { children: React.ReactNode }) => {
    const today = new Date();
    const [pickerState, setPickerState] = useState<tpickerContextType["pickerState"]>({
        today: today,
        activeDate: today,
        activeMonth: today.getMonth(),
        activeYear: today.getFullYear(),
        isActive: true,
        locale: "en",
        mode: "date",
    });

    return (
        <PickerContext.Provider value={{ pickerState, setPickerState }}>
            {children}
        </PickerContext.Provider>
    )
}

export {
    PickerProvider,
    usePicker,
}
