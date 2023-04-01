import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EditRegisterPage from "./pages/Register/EditRegisterPage";
import NewRegister from "./pages/Register/NewRegisterPage";

function App() {
  const [editID, setEditID] = useState('')
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage editID={editID} setEditID={setEditID}/>}></Route>
          <Route path="/new-register" element={<NewRegister/>}></Route>
          <Route path="edit-register" element={<EditRegisterPage editID={editID}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
