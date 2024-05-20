import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/shop">
        <span>Shop</span>
      </Link>
      <Link to="/about">
        <span>About Us</span>
      </Link>
      {/* <Link to="/services">
        <span>Services</span>
        </Link>
        <Link to="/blog"> 
        <span>Blog</span>
        </Link> */}
    </div>
  );
};

export default Menu;
