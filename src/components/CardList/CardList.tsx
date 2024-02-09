import s from "./cardList.module.scss";
import { Card } from "./Card/Card";
import { useGetCharacterQuery } from "../../store/services/getDataOneApi";

export const CardList = () => {
  const { data, error, isLoading } = useGetCharacterQuery("");

  return (
    <ul className={s.cardList}>
      {isLoading && <div>Loading...</div>}
      {error && null}
      {!!data &&
        data.docs.map((item) => (
          <Card
            key={item._id}
            race={item.race}
            gender={item.gender}
            spouse={item.spouse}
            wikiUrl={item.wikiUrl}
            name={item.name}
          />
        ))}
    </ul>
  );
};
