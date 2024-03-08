import { useGetCahractersQuery } from "../../store/api/dataOneApi";
import s from "./card.module.scss";

export const Card = () => {
  const { data, error, isLoading } = useGetCahractersQuery("");

  const characters = data
    ? data.docs.map((item) => (
        <li key={item._id} className={s.cardItem}>
          <h3>{item.name}</h3>
          <p>Race: {item.race}</p>
          <p>Gender: {item.gender}</p>
          <p>Realm: {item.realm || "Unknown"} </p>
        </li>
      ))
    : null;

  return (
    <ul className={s.card}>
      {isLoading && <div>Loading...</div>}
      {error && null}
      {characters}
    </ul>
  );
};
