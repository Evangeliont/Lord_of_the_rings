import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { Layout } from "../../components/Layout";
import { AuthForm } from "../../components/Auth";
import s from "./signIn.module.scss";

export const SignIn = () => {
  return (
    <Layout>
      <Container>
        <div className={s.content}>
          <h2 className={s.contentTitle}>Sign In</h2>
          <AuthForm isSignUp={false} pathname={"/signIn"} />
          <p>
            Create an&nbsp;
            <Link className={s.contentLink} to="/signUp">
              account?
            </Link>
          </p>
        </div>
      </Container>
    </Layout>
  );
};
