import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
