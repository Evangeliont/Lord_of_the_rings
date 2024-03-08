import { Link, useParams } from "react-router-dom";
import { Layout } from "../../Layout";
import { dataOneApi } from "../../../store/api/dataOneApi";

export const CardDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const { data, isLoading } = dataOneApi.useGetCharacterIdQuery(id || "");

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      <div>
        {!!data &&
          data.docs.map((item) => (
            <div key={item._id}>
              <Link to="/">Back</Link>
              <h2>Character Information</h2>
              <h3>{item.name}</h3>
              <p>Race: {item.race}</p>
              <p>Gender: {item.gender}</p>
              <p>birth: {item.birth}</p>
              <p>death: {item.death}</p>
              <p>hair: {item.hair}</p>
              <p>name: {item.name}</p>
              <p>realm: {item.realm}</p>
              <p>spouse: {item.spouse}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
};
