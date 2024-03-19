import { Container } from "../../components/Container";
import { CardList } from "../../components/CardList";
import { useGetCharactersQuery } from "../../store/api/dataOneApi";
import { Preloader } from "../../components/Preloader";

import s from "./home.module.scss";

export const Home = () => {
  const { data, error, isLoading } = useGetCharactersQuery("");

  const characters =
    data && data.docs ? <CardList character={data.docs} /> : null;

  return (
    <main>
      <section className={s.home}>
        <Container>
          <h2 className={s.homeTitle}>Home</h2>
          {isLoading && <Preloader />}
          {error && null}
          {characters}
        </Container>
      </section>
    </main>
  );
};
