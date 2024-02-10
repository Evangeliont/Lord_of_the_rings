import s from "./header.module.scss";
import logoType from "../../assets/logotype.png";
import { SearchBlock } from "./SearchBlock";
import { LoginBlock } from "./LoginBlock";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.header}>
      <a href="/" className={s.headerLogoLink}>
        <img className={s.headerLogoImg} src={logoType} alt="logo" />
        The Encyclopedia of the LOTR
      </a>
      <SearchBlock />
      <nav>
        <ul className={s.headerList}>
          <li className={s.headerItem}>
            <Link className={s.headerLink} to="favorites">
              Favorites
            </Link>
          </li>
          <li className={s.headerItem}>
            <Link className={s.headerLink} to="history">
              History
            </Link>
          </li>
        </ul>
      </nav>
      <LoginBlock />
    </header>
  );
};
