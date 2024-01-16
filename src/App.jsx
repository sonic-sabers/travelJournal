import "./App.css";
import data from "./data.js";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
    return (
        <>
            <Header />
            {data.map((place) => (
                <Card key={place.id} place={place} />
            ))}
        </>
    );
}

export default App;
