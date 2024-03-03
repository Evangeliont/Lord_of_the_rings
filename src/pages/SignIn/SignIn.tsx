import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";

export const SingIn = () => {
  return (
    <Layout>
      <Container>
        <h2>Sign In</h2>
        <p>
          Create an <Link to="/signUp">account?</Link>
        </p>
      </Container>
    </Layout>
  );
};
