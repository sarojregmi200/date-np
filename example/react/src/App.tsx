import Picker from "date-np/picker";

function App() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: "linear-gradient(#fff, #e8e8e8)"
        }}>
            <Picker
                shouldShowInput={true}
            />
        </div>
    )
}

export default App
