import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SignInForm.module.css";
const initialValues = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const inputSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={{}}
        validationSchema={inputSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Enter your email
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMessage}
            />
          </label>
          <label className={css.label}>
            Enter your password
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="span"
              className={css.errorMessage}
            />
          </label>
          <button className={css.btn} type="submit">
            Sign In
          </button>
        </Form>
      </Formik>
      <a>Sign up</a>
    </div>
  );
};
