import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ListItems from "./pages/ListItems";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/items" element={<ListItems />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
