import { CharacterCustomElement } from "../../types/Characters";
import { Card } from "./Card";
import s from "./cardList.module.scss";

interface CardListProp {
  character: CharacterCustomElement[];
}

export const CardList = ({ character }: CardListProp) => {
  const contentCard = character.map((character) => (
    <li className={s.cardListItem} key={character.id}>
      <Card
        id={character.id}
        name={character.name}
        race={character.race}
        gender={character.gender}
        realm={character.realm}
        birth={character.birth}
        death={character.death}
        hair={character.hair}
        spouse={character.spouse}
        wikiUrl={character.wikiUrl}
      />
    </li>
  ));

  return <ul className={s.cardList}>{contentCard}</ul>;
};
