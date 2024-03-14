import { useSearchParams, useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { CardList } from "../../components/CardList";
import { useState, useEffect } from "react";
import { useGetCharactersQuery } from "../../store/api/dataOneApi";
import { Preloader } from "../../components/Preloader";
import { Pagination } from "../../components/Pagination";
import s from "./home.module.scss";

export const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") || "1";

  const [currentPage, setCurrentPage] = useState(Number(pageQuery));
  const { data, error, isLoading } = useGetCharactersQuery({
    page: currentPage,
    limit: 12,
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

  // Наверное с этим надо что-то придумать...
  const character = data && data.docs ? data.docs.map((item) => item) : [];
  const characters = <CardList character={character} />;

  return (
    <main>
      <section className={s.home}>
        <Container>
          <h2 className={s.homeTitle}>Home</h2>
          {isLoading && <Preloader />}
          {error && null}
          {characters}
          <Pagination
            pageNumbers={pageNumbers}
            onChangePage={handlePageChange}
          />
        </Container>
      </section>
    </main>
  );
};
