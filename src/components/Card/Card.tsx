import { Link } from "react-router-dom";
import { useGetCharactersQuery } from "../../store/api/dataOneApi";
import s from "./card.module.scss";

export const Card = () => {
  const { data, error, isLoading } = useGetCharactersQuery("");

  const characters = data
    ? data.docs.map((item) => (
        <li key={item.id} className={s.cardItem}>
          <h3>{item.name}</h3>
          <p>Race: {item.race}</p>
          <p>Gender: {item.gender}</p>
          <p>Realm: {item.realm || "Unknown"} </p>
          <Link to={`/card/${item.id}`}>
            <button>Add More</button>
          </Link>
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
