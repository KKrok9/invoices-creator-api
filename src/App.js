import "./styles/App.css";
import Form from "./components/form/Form";
import Invoices from "./components/invoices/Invoices";
import { useState, useEffect } from "react";

function App() {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    console.log(invoices);
  }, [invoices]);
  return (
    <div className="App">
      <Form invoices={invoices} setInvoices={setInvoices}></Form>
      <Invoices invoices={invoices}></Invoices>
    </div>
  );
}

export default App;
