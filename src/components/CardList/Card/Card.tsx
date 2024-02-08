import { ArrCard } from "../CardList";
import s from "./card.module.scss";

export const Card = ({ imgUrl, title, description }: ArrCard) => {
  return (
    <li className={s.card}>
      <img className={s.img} src={imgUrl} alt="Заглушка" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};
