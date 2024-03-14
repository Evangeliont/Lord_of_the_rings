import { Link, useParams } from "react-router-dom";
import { dataOneApi } from "../../../../store/api/dataOneApi";
import { Container } from "../../../Container";
import { Layout } from "../../../Layout";
import { Preloader } from "../../../Preloader";
import s from "./cardDetails.module.scss";

export const CardDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const { data, isLoading } = dataOneApi.useGetCharacterIdQuery(id || "");

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
                    realm: {item.realm || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    birth: {item.birth || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    death: {item.death || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    hair: {item.hair || "Unknown"}
                  </p>
                  <p className={s.cardDetailsDescription}>
                    spouse: {item.spouse || "Unknown"}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
};
