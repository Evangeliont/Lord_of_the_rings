import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import s from "./home.module.scss";

export const Home = () => {
  return (
    <main>
      <section className={s.home}>
        <Container>
          <h2 className={s.homeTitle}>Home</h2>
          <Card />
        </Container>
      </section>
    </main>
  );
};
