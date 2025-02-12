import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};