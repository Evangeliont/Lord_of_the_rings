import { Card } from "./Card/Card";
import s from "./cardList.module.scss";

export const CardList = () => {
  return (
    <ul className={s.cardList}>
      <Card />
    </ul>
  );
};
