import { Link } from "react-router-dom";
import imgUrl from "../../../assets/img.png";
import s from "./card.module.scss";
import { Button } from "../../Button";

interface Card {
  id: string;
  race: string;
  gender: string;
  name: string;
  wikiUrl: string;
}

export const Card = ({ id, race, gender, name, wikiUrl }: Card) => {
  return (
    <li className={s.card}>
      <img className={s.img} src={imgUrl} alt="Заглушка" />
      <h2 className={s.title}>{name}</h2>
      <span className={s.element}>{race}</span>
      <span className={s.element}>{gender}</span>
      <a className={s.linkTo} href={wikiUrl} target="blank_">
        Fandom LOTR
      </a>
      <Link to={`/characters/${id}`}>
        <Button name={"More"} />
      </Link>
      <div className={s.addCard}>
        <Button name={"+"} />
      </div>
    </li>
  );
};
