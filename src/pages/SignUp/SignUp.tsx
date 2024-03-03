import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";

export const SingUp = () => {
  return (
    <Layout>
      <Container>
        <h2>Sign Up</h2>
        <p>
          Already have an <Link to="/signIn">account?</Link>
        </p>
      </Container>
    </Layout>
  );
};
