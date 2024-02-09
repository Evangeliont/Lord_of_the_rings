import imgUrl from "../../../assets/img.png";
import s from "./card.module.scss";

interface Card {
  race: string;
  gender: string;
  name: string;
  wikiUrl: string;
}

export const Card = ({ race, gender, name, wikiUrl }: Card) => {
  return (
    <li className={s.card}>
      <img className={s.img} src={imgUrl} alt="Заглушка" />
      <h2 className={s.title}>{name}</h2>
      <span className={s.element}>{race}</span>
      <span className={s.element}>{gender}</span>
      <a className={s.linkTo} href={wikiUrl} target="blank_">
        Fandom LOTR
      </a>
    </li>
  );
};
