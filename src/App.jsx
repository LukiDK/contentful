import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frontpage } from "./pages/frontpage";
import { Detailspage } from "./pages/detailspage";
import { MainLayout } from "./layout/MainLayout";

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/details/:articleID" element={<Detailspage />} />
            <Route path="/category/:category" element={<Frontpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
