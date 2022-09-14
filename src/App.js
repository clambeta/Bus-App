import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimpleForm from "./pages/form/SimpleForm";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SimpleForm />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;