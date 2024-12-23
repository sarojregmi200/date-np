import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type pickerContextType = {
    pickerState: {
        today: Date;
        isActive: boolean;
        locale: "en" | "ne";
        activeDate: Date,
        activeMonth: number,
        activeYear: number,
    };
    setPickerState: Dispatch<SetStateAction<pickerContextType["pickerState"]>>;
}

const PickerContext = createContext<pickerContextType | null>(null);

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
            yearOffset = month / 11;
            monthOffset = month % 11;
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

    return {
        ...pickerContextValue,
        updatePickerDay,
        updatePickerMonth
    };
}

const PickerProvider = ({ children }: { children: React.ReactNode }) => {
    const today = new Date();
    const [pickerState, setPickerState] = useState<pickerContextType["pickerState"]>({
        today: today,
        activeDate: today,
        activeMonth: today.getMonth(),
        activeYear: today.getFullYear(),
        isActive: true,
        locale: "en",
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
