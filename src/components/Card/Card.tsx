import { ArrData } from "../../pages/Home";
import s from "./card.module.scss";

interface CardProps {
  heroes: ArrData[];
}

export const Card = ({ heroes }: CardProps) => {
  return (
    <ul className={s.card}>
      {heroes.map((item) => (
        <li key={item.id} className={s.cardItem}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.race}</div>
          <div>{item.age}</div>
        </li>
      ))}
    </ul>
  );
};
