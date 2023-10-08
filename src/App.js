import "./App.css";
import Login from "./components/Login";
import ChatRoom from './components/ChatRoom'

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<ChatRoom/>} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
