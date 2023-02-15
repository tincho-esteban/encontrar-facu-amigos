import "./App.css";
import Table from "./Components/Table";
import Form from "./Components/Form";

function App() {
    return (
        <div>
            <h1>Encontrar facu amigos</h1>
            <p>llena los datos para aparecer en la tabla</p>
            <Form />
            <h2>lista</h2>
            <Table />
        </div>
    );
}

export default App;
