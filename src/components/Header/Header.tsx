import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Logo" />
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/recent-orders">Recent Orders</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
