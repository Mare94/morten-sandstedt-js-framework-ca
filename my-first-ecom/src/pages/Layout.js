import { Outlet, Link } from "react-router-dom";
import ContactPage from "./ContactPage";

const Nav = () => {
    return (
        <>
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productpage">Products</Link>
        </li>
        <li>
          <Link to="/contactpage">Contact Us</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
        </>
    )
};

const Header = () => {
    return (
        <>
        <header>
            <div>Header</div>
            <Nav />
        </header>
        </>
    )
};

const Footer = () => {
    return <footer>Website footer</footer>
};

const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
};

export default Layout;