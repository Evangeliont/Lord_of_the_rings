import imgUrl from "../../../assets/img.png";
import s from "./card.module.scss";
// import { character } from "../../../interfaces/character";

interface Card {
  race: string;
  gender: string;
  spouse: string;
  name: string;
  wikiUrl: string;
}

export const Card = ({ race, gender, spouse, name, wikiUrl }: Card) => {
  return (
    <li className={s.card}>
      <img className={s.img} src={imgUrl} alt="Заглушка" />
      <h2>{name}</h2>
      <span>{race}</span>
      <span>{gender}</span>
      <span>{spouse}</span>
      <a href={wikiUrl} target="blank_">
        More info
      </a>
    </li>
  );
};
