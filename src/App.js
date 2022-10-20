import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Suppliers from "./components/Suppliers";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Suppliers />
      </QueryClientProvider>
    </div>
  );
}

export default App;
