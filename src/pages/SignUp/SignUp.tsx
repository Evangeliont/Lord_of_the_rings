import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";
import { AuthForm } from "../../components/Auth";
import s from "./signUp.module.scss";

export const SingUp = () => {
  return (
    <Layout>
      <Container>
        <div className={s.content}>
          <h2 className={s.contentTitle}>Sign Up</h2>
          <AuthForm />
          <p>
            Already have an&nbsp;
            <Link className={s.contentLink} to="/signIn">
              account?
            </Link>
          </p>
        </div>
      </Container>
    </Layout>
  );
};
