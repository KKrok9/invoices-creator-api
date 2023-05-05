import "./styles/App.css";
import Form from "./components/form/Form";
import Invoices from "./components/invoices/Invoices";

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Invoices></Invoices>
    </div>
  );
}

export default App;
