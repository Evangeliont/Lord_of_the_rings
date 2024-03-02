import { Container } from "../../components/Container";
import s from "./home.module.scss";

export const Home = () => {
  return (
    <main>
      <section className={s.home}>
        <Container>
          <div>Home</div>
        </Container>
      </section>
    </main>
  );
};
