import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { NotResult } from "../../components/NotResult";
import { useAppSelector } from "../../store/hooks";
import { getFavorite } from "../../store/slices/favoriteSlice";
import s from "./favorites.module.scss";

export interface CharacterCustomElement {
  id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export const Favorites = () => {
  const favoriteList = useAppSelector(getFavorite);
  const isEmty: boolean = favoriteList.length === 0;

  return (
    <main>
      <section className={s.favorites}>
        <Container>
          <h2 className={s.favoritesTitle}>Favorites</h2>
          {isEmty ? <NotResult /> : <Card card={favoriteList} />}
        </Container>
      </section>
    </main>
  );
};
