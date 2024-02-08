import { CharacterCustomElement } from "../../../interfaces/character";

interface Card {
  characters: CharacterCustomElement[];
}

export const Card = ({ characters }: Card) => {
  console.log(characters);

  return (
    <div className="character-list">
      {characters.map((item) => (
        <div key={item.id} className="item-card">
          <h2>{item.name}</h2>
          <p>Race: {item.race}</p>
          <p>Gender: {item.gender}</p>
        </div>
      ))}
    </div>
  );
};
