import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <main className="flex-grow">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
