import { Outlet } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import "./index.css";

function App() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}

export default App;
