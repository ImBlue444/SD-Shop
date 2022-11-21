import Navbar from "../components/Navbar/index";
import SubNav from "../components/SubNav/index";
import Footer from "../components/Footer/index";
import Toolbar from "./Toolbar/index";

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
