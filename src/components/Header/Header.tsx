import { useContext } from "react";
import { Container } from "../Container";
import { Auth } from "../Auth";
import { Search } from "./Search";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";
import logo from "../../assets/images/logotype.png";
import s from "./header.module.scss";

export const Header = () => {
  const currentTheme = useContext(ThemeContext);
  return (
    <header
      className={`${s.header} ${
        currentTheme.theme === "black" ? s.headerBlack : s.headerWhite
      }`}
    >
      <Container>
        <div className={s.headerWrapper}>
          <Link className={s.headerLogoLink} to="/">
            <img className={s.headerLogoImg} src={logo} alt="logo" />
            <h1 className={s.headerLogoTitle}>LOTR</h1>
          </Link>
          <Auth />
          <button className={s.headerButton} onClick={currentTheme.toggleTheme}>
            Toggle Theme
          </button>
          <Search />
        </div>
      </Container>
    </header>
  );
};
