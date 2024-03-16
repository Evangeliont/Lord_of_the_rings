import { Link, useNavigate, useParams } from "react-router-dom";
import { dataOneApi } from "../../../../store/api/dataOneApi";
import { Container } from "../../../Container";
import { Layout } from "../../../Layout";
import { Preloader } from "../../../Preloader";
import { getEmail } from "../../../../store/slices/userSlice";
import { CharacterCustomElement } from "../../../../types/Characters";
import { Button } from "../../../Button";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import {
  getFavorite,
  toggleFavoriteItem,
} from "../../../../store/slices/favoriteSlice";
import s from "./cardDetails.module.scss";

export const CardDetails = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getEmail);
  const favoriteList = useAppSelector(getFavorite);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string | undefined }>();
  const { data, isLoading } = dataOneApi.useGetCharacterIdQuery(id || "");

  // Здесь как-то всё усложнил...
  let isFav = false;
  if (data && data.docs.length > 0) {
    isFav = favoriteList.some(
      (item: CharacterCustomElement) => item.id === data.docs[0].id
    );
  }

  const handleClick = (character: CharacterCustomElement, email?: string) => {
    if (email) {
      dispatch(toggleFavoriteItem({ item: character, email }));
      return;
    }
    navigate("/signIn");
  };

  return (
    <Layout>
      <Container>
        <section className={s.cardDetails}>
          <div className={s.cardDetailsHead}>
            <h2 className={s.cardDetailsTitle}>Details hero</h2>
            <Link to="/">Back</Link>
          </div>
          <div className={s.cardDetailsContent}>
            {isLoading && <Preloader />}
            {data &&
              data.docs.map((item) => (
                <div key={item.id}>
                  <h3 className={s.cardDetailsSubtitle}>{item.name}</h3>
                  <p className={s.cardDetailsDescription}>Race: {item.race}</p>
                  <p className={s.cardDetailsDescription}>
                    Gender: {item.gender}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    Realm: {item.realm || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    Birth: {item.birth || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    Death: {item.death || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    Hair: {item.hair || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    Spouse: {item.spouse || "Unknown"}
                  </p>
                  <div className={s.cardDetailsActions}>
                    <a
                      className={s.cardDetailsLink}
                      href={item.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      More info
                    </a>
                    <Button
                      className={s.cardDetailsButton}
                      onClick={() => handleClick(item, userEmail)}
                    >
                      {isFav ? "Remove" : "Add"}
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
};
