import Navbar from "../components/Navbar/index";
import SubNav from "../components/SubNav/index";
import Footer from "../components/Footer/index";
import Categories from "../components/Categories/index";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <SubNav />

      {children}
      <Footer />
    </div>
  );
}

export default Layout;
