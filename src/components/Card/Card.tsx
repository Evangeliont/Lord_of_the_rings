import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useGetCharactersQuery } from "../../store/api/dataOneApi";
import { Pagination } from "../Pagination";
import { Preloader } from "../Preloader";
import s from "./card.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getFavorite,
  toggleFavoriteItem,
} from "../../store/slices/favoriteSlice";
import { getEmail } from "../../store/slices/userSlice";
import { CharacterCustomElement } from "../../types/Characters";

export const Card = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const pageQuery = searchParams.get("page") || "1";

  const userEmail = useAppSelector(getEmail);
  const favoriteList = useAppSelector(getFavorite);
  const isFav = favoriteList.some(
    (item: CharacterCustomElement) => item.id === item.id
  );

  const [currentPage, setCurrentPage] = useState(Number(pageQuery));
  const [limit] = useState(12);
  const { data, error, isLoading } = useGetCharactersQuery({
    page: currentPage,
    limit: limit,
  });

  const totalPages = data && data.pages ? data.pages : 0;

  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    setCurrentPage(Number(pageQuery));
  }, [pageQuery]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    navigate(`/?page=${pageNumber}`);
  };

  const handleClick = (card: CharacterCustomElement, email?: string) => {
    if (email) {
      dispatch(toggleFavoriteItem({ item: card, email: email }));
      return;
    }
    navigate("/signIn");
  };

  const characters = data
    ? data.docs.map((item) => (
        <li key={item.id} className={s.cardItem}>
          <h3>{item.name}</h3>
          <p>Race: {item.race || "Unknown"}</p>
          <p>Gender: {item.gender || "Unknown"}</p>
          <p>Realm: {item.realm || "Unknown"} </p>
          <div className={s.cardButtons}>
            <Link to={`/card/${item.id}`}>
              <button className={s.cardButton}>Details</button>
            </Link>
            <button
              className={s.cardButton}
              onClick={() => handleClick(item, userEmail)}
            >
              {isFav && userEmail ? "Remove" : "Add"}
            </button>
          </div>
        </li>
      ))
    : null;

  return (
    <>
      <ul className={s.card}>
        {isLoading && <Preloader />}
        {error && null}
        {characters}
      </ul>
      <div>
        <Pagination pageNumbers={pageNumbers} onChangePage={handlePageChange} />
      </div>
    </>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  race: PropTypes.string,
  gender: PropTypes.string,
  realm: PropTypes.string,
};
