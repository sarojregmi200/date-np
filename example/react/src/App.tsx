import Picker from "date-np"

function App() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: "linear-gradient(#fff, #e8e8e8)"
        }}>
            <Picker />
        </div>
    )
}

export default App
