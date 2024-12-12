import { SignInForm } from "../../components/SignInForm/SignInForm.jsx";
import "../../index.css";
import css from "./SignInPage.module.css";
export const SignInPage = () => {
  return (
    <section className={css.signIn}>
      <div className={css.wrapper}>
        <h3>Sign In</h3>
        <SignInForm />
      </div>
    </section>
  );
};
