import s from "./header.module.scss";
import logoType from "../../assets/logotype.png";
import { SearchBlock } from "./SearchBlock";
import { LoginBlock } from "./LoginBlock";

export const Header = () => {
  return (
    <header className={s.header}>
      <a href="/" className={s.headerLogoLink}>
        <img className={s.headerLogoImg} src={logoType} alt="logo" />
        The Encyclopedia of the LOTR
      </a>
      <SearchBlock />
      <LoginBlock />
    </header>
  );
};
