import { CharacterCustomElement } from "../../types/DataApiTypes";
import { Card } from "./Card";
import s from "./cardList.module.scss";

interface CardListProp {
  character: CharacterCustomElement[];
}

export const CardList = ({ character }: CardListProp) => {
  const contentCard = character.map((char) => (
    <li className={s.cardListItem} key={char.id}>
      <Card
        id={char.id}
        name={char.name}
        race={char.race}
        gender={char.gender}
        realm={char.realm}
        birth={char.birth}
        death={char.death}
        hair={char.hair}
        spouse={char.spouse}
        wikiUrl={char.wikiUrl}
      />
    </li>
  ));

  return <ul className={s.cardList}>{contentCard}</ul>;
};
