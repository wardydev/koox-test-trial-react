import imgLogo from "../assets/images/logo.png";
import ICMenu from "../assets/icons/menu-outline.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item sidebar-logo">
        <img src={imgLogo} alt="logo" width={130} />
      </div>
      <div className="sidebar-item sidebar-menus">
        <img src={ICMenu} alt="hamburger menu" />
      </div>
    </div>
  );
};

export default Sidebar;
