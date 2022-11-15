import React from "react";
import Navbar from "./Navbar";
import SubNav from "./SubNav";
import Toolbar from "./Toolbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Toolbar />
      <Navbar />
      <SubNav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
