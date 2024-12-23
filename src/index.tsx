import Day from "./Components/day";
import Week from "./Components/day";
import Month from "./Components/day";
import "./index.css";

const Picker = () => {
    return (
        <div className="flex flex-col bg-red-200">
            <Day />
            <Week />
            <Month />
        </div>
    )

}

export default Picker;
