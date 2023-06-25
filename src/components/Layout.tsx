import { ReactNode } from "react";
import { Footer, Header, Sidebar } from ".";
import imgBg from "../assets/images/bg.png";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="layout">
        <div className="layout-content">
          <Sidebar />
          <img className="layout-content_bg" src={imgBg} alt="background" />
          <div className="layout-content_container">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
