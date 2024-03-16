import { Container } from "../../components/Container";
import { MarkHistory } from "../../components/MarkHistory";
import { NotResult } from "../../components/NotResult";
import { useAppSelector } from "../../store/hooks";
import { getHistory } from "../../store/slices/historySlice";
import s from "./history.module.scss";

export const History = () => {
  const historyList = useAppSelector(getHistory);
  const isEmty: boolean = historyList.length === 0;
  const content = historyList.map((post: string, index: number) => (
    <MarkHistory post={post} key={post + index} />
  ));

  return (
    <main>
      <section className={s.history}>
        <Container>
          <h2 className={s.historyTitle}>History</h2>
          {isEmty ? (
            <NotResult />
          ) : (
            <ul className={s.historyList}>{content}</ul>
          )}
        </Container>
      </section>
    </main>
  );
};
