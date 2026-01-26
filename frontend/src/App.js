import { Routes, Route } from "react-router-dom";
import GenresPage from "./pages/GenresPage";
import GenreMeetingsPage from "./pages/GenreMeetingsPage"
import Header from "./components/UI/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/genres/" element={<GenresPage />} />
      <Route path="/genres/:genreId" element={<GenreMeetingsPage />} />
    </Routes>
    </>
  );
}

export default App;

