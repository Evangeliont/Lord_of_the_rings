import { CardList } from "../../components/CardList";
import { Container } from "../../components/Container";
import { NotResult } from "../../components/NotResult";
import { useAppSelector } from "../../store/hooks";
import { getFavorite } from "../../store/slices/favoriteSlice";
import s from "./favorites.module.scss";

export const Favorites = () => {
  const favoriteList = useAppSelector(getFavorite);
  const isEmty: boolean = favoriteList.length === 0;

  return (
    <main>
      <section className={s.favorites}>
        <Container>
          <h2 className={s.favoritesTitle}>Favorites</h2>
          {isEmty ? <NotResult /> : <CardList character={favoriteList} />}
        </Container>
      </section>
    </main>
  );
};
