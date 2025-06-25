import Logo from "./components/Logo/Logo.jsx";
import Search from "./components/Search/search.jsx";
import Lang from "./components/Lang/Lang.jsx";
import Login from "./components/Login/login.jsx";

const Header = ({ title = "Uixel", subtitle = "Your Subtitle" }) => {
  return (
    <header>
      <Logo />
      <Search />
      <Login />
      <Lang />
    </header>
  );
};

export default Header;
