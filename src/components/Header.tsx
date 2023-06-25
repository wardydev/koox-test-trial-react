import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-items">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/menu" className="link">
          Menu
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/order-now" className="link">
          Order Now
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
