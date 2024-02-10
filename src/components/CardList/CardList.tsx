import s from "./cardList.module.scss";
import { Card } from "./Card/Card";
import { getDataOneApi } from "../../store/services/getDataOneApi";
import { List } from "../List/List";

export const CardList = () => {
  const { data, isLoading } = getDataOneApi.useGetCharacterQuery("");

  return (
    <div>
      <h1 className={s.title}>Heroes of the universe LOTR</h1>
      <List>
        {isLoading && <div>Loading...</div>}
        {!!data &&
          data.docs.map((item) => (
            <Card
              key={item.id}
              race={item.race}
              gender={item.gender}
              wikiUrl={item.wikiUrl}
              name={item.name}
            />
          ))}
      </List>
    </div>
  );
};
