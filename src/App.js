import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUSer from "./components/AddUSer";
import EditUSer from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUSer />} />
        <Route path="edit/:id" element={<EditUSer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
