import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type pickerContextType = {
    pickerState: {
        currentDate: Date;
        isActive: boolean;
        locale: "en" | "ne";
    };
    setPickerState: Dispatch<SetStateAction<pickerContextType["pickerState"]>>;
}

const PickerContext = createContext<pickerContextType | null>(null);

const usePicker = () => {
    const pickerContextValue = useContext(PickerContext);
    if (!pickerContextValue) {
        throw new Error("usePicker must be used within a PickerProvider");
    }

    return pickerContextValue;
}

const PickerProvider = ({ children }: { children: React.ReactNode }) => {
    const today = new Date();
    const [pickerState, setPickerState] = useState<pickerContextType["pickerState"]>({
        currentDate: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()),
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
