import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useGetCharacterSearchQuery } from "../../store/api/dataOneApi";
import { Preloader } from "../../components/Preloader";
import { Container } from "../../components/Container";
import s from "./searchResult.module.scss";

export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query") || "";
  const { data, isLoading, isSuccess } = useGetCharacterSearchQuery(queryParam);

  const characterName = data && data.docs ? data.docs : [];

  const handleClick = (id: string) => {
    navigate(`/card/${id}`);
  };

  return (
    <main>
      <section className={s.searchResult}>
        <Container>
          <h2 className={s.searchResultTitle}>Search Results</h2>

          {isLoading && <Preloader />}
          {!isLoading && isSuccess && (
            <>
              {characterName.length > 0 ? (
                <ul className={s.searchResultList}>
                  {characterName.map((item) => (
                    <li
                      className={s.searchResultItem}
                      key={item.id}
                      onClick={() => {
                        handleClick(item.id);
                      }}
                    >
                      <p className={s.searchResultSubTitle}>{item.name}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={s.searchResultSubTitle}>Nothing was found</p>
              )}
            </>
          )}
        </Container>
      </section>
    </main>
  );
};
