import { Card } from "./Card/Card";
import s from "./cardList.module.scss";
import imgUrl from "../../assets/img.png";

export interface ArrCard {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
}

const arrCard: ArrCard[] = [
  { id: 1, imgUrl: imgUrl, title: "Леголас", description: "Кароль Лехолесья" },
  { id: 2, imgUrl: imgUrl, title: "Арагорн", description: "Кароль Гондора" },
  { id: 3, imgUrl: imgUrl, title: "Гимли", description: "Кароль под горой" },
];

export const CardList = () => {
  return (
    <ul className={s.cardList}>
      {arrCard.map((card, id) => (
        <Card
          key={id}
          id={id}
          imgUrl={imgUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </ul>
  );
};
