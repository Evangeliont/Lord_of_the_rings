import { getDataOneApi } from "../../../store/services/getDataOneApi";
import { Button } from "../../Button";
import { Layout } from "../../Layout";
import { Link, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams<{ id: string | undefined }>();

  const { data, isLoading } = getDataOneApi.useGetCharacterIdQuery(id || "");

  return (
    <Layout>
      {isLoading && <div>Loading...</div>}
      <div>
        {data && (
          <div>
            <Link to="/">
              <Button name={"back"} />
            </Link>
            <h2>Character Information</h2>
            <h3>{data.docs[0].name}</h3>
            <p>Race: {data.docs[0].race}</p>
            <p>Gender: {data.docs[0].gender}</p>
            <p>birth: {data.docs[0].birth}</p>
            <p>death: {data.docs[0].death}</p>
            <p>hair: {data.docs[0].hair}</p>
            <p>name: {data.docs[0].name}</p>
            <p>realm: {data.docs[0].realm}</p>
            <p>spouse: {data.docs[0].spouse}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CardDetails;
