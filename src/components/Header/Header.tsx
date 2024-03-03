import { Container } from "../Container";
import { Auth } from "../Auth";
import { Search } from "./Search";
import logo from "../../assets/images/logotype.png";
import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <a className={s.headerLogoLink} href="/">
            <img className={s.headerLogoImg} src={logo} alt="logo" />
            <h1 className={s.headerLogoTitle}>LOTR</h1>
          </a>
          <Auth />
          <Search />
        </div>
      </Container>
    </header>
  );
};
