import { useContext } from "react";
import { Container } from "../Container";
import { Auth } from "../Auth";
import { Search } from "./Search";
import logo from "../../assets/images/logotype.png";
import s from "./header.module.scss";
import { ThemeContext } from "../../Context/ThemeContext";

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
          <a className={s.headerLogoLink} href="/">
            <img className={s.headerLogoImg} src={logo} alt="logo" />
            <h1 className={s.headerLogoTitle}>LOTR</h1>
          </a>
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
