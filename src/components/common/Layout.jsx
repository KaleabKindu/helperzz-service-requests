import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />
      <div className="py-16 min-h-screen p-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
