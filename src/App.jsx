import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dasboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
