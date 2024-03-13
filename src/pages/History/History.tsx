import { Container } from "../../components/Container";
import { NotResult } from "../../components/NotResult";
import s from "./history.module.scss";

export const History = () => {
  return (
    <main>
      <section className={s.history}>
        <Container>
          <h2 className={s.historyTitle}>History</h2>
          <NotResult />
        </Container>
      </section>
    </main>
  );
};
