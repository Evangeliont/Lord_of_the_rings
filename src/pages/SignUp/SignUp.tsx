import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";
import { AuthForm } from "../../components/Auth";
import s from "./signUp.module.scss";

export const SignUp = () => {
  return (
    <Layout>
      <Container>
        <div className={s.content}>
          <h2 className={s.contentTitle}>Sign Up</h2>
          <AuthForm isSignUp={true} />
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
