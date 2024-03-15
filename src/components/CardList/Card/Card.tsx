import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  getFavorite,
  toggleFavoriteItem,
} from "../../../store/slices/favoriteSlice";
import { getEmail } from "../../../store/slices/userSlice";
import { CharacterCustomElement } from "../../../types/Characters";
import s from "./card.module.scss";
import { Button } from "../Button";

export const Card = (character: CharacterCustomElement) => {
  const userEmail = useAppSelector(getEmail);
  const favoriteList = useAppSelector(getFavorite);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFav = favoriteList.some(
    (item: CharacterCustomElement) => item.id === character.id
  );

  const handleClick = (character: CharacterCustomElement, email?: string) => {
    if (email) {
      dispatch(toggleFavoriteItem({ item: character, email: email }));
      return;
    }
    navigate("/signIn");
  };

  return (
    <div className={s.cardContent}>
      <h3>{character.name}</h3>
      <p>Race: {character.race || "Unknown"}</p>
      <p>Gender: {character.gender || "Unknown"}</p>
      <p>Realm: {character.realm || "Unknown"} </p>
      <div className={s.cardButtons}>
        <Link to={`/card/${character.id}`}>
          <button className={s.cardButton}>Details</button>
        </Link>
        <Button
          className={s.cardButton}
          onClick={() => handleClick(character, userEmail)}
        >
          {isFav && userEmail ? "Remove" : "Add"}
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  race: PropTypes.string,
  gender: PropTypes.string,
  realm: PropTypes.string,
};
