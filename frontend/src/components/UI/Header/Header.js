import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);     // есть история → назад
    } else {
      navigate("/");   // истории нет → на главную
    }
  };

  return (
    <header className="app-header">
      {!isHomePage && (
        <button
          className="app-header__back"
          onClick={handleBack}
        >
          Назад
        </button>
      )}

      <Link to="/" className="app-header__title">
        Ufa Book Club
      </Link>
    </header>
  );
}

export default Header;