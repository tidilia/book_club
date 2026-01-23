import { Routes, Route } from "react-router-dom";
import GenresPage from "./pages/GenresPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenresPage />} />
    </Routes>
  );
}

export default App;

