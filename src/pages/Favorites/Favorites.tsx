import { Container } from "../../components/Container";
import { NotResult } from "../../components/NotResult";
import s from "./favorites.module.scss";

export const Favorites = () => {
  return (
    <main>
      <section className={s.favorites}>
        <Container>
          <h2 className={s.favoritesTitle}>Favorites</h2>
          <NotResult />
        </Container>
      </section>
    </main>
  );
};
