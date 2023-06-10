import { useFormik } from "formik";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { cleanErrorMessage, login } from "../store/userSlice";
import background from "../assets/bg.jpg";
import { LoginCredentials } from "../models/User";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { StyledLabel } from "./Register/styles";

const initialValues: LoginCredentials = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Nie poprawny format.")
    .required("To pole jest wymagane."),
  password: Yup.string()
    .required("To pole jest wymagane.")
    .matches(/^.{6,}$/, "Minimum 6 znaków"),
});

export const Login = () => {
  const errorMessage = useSelector(
    (state: RootState) => state.users.errorMessage
  );
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(cleanErrorMessage());
    };
  }, []);

  const onSubmit = (values: LoginCredentials) => {
    dispatch(
      login({
        email: formik.values.email,
        password: formik.values.password,
      })
    )
      .unwrap()
      .then((e) => {
        navigate("/browse");
        dispatch(cleanErrorMessage());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="signup-overlay">
        <img className="signup-overlay__image" src={background} alt="" />
        <div className="signup-overlay__dark"></div>
      </div>
      <div className="signup-container">
        <div className="signup-container__inner">
          <form
            className="signup-container__form"
            onSubmit={formik.handleSubmit}
          >
            <h2>Login</h2>
            <div className="signup-container__control">
              <input
                type="text"
                id="email"
                {...formik.getFieldProps("email")}
              />
              <StyledLabel active={!!formik.values.email} htmlFor="email">
                Email
              </StyledLabel>
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="signup-container__control">
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
              />
              <StyledLabel active={!!formik.values.password} htmlFor="password">
                Password
              </StyledLabel>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            {!!errorMessage && <div className="error">{errorMessage}</div>}
          </form>
          <p>Do not have a Netflix account yet?</p>
          <Link to="/register">Register now.</Link>
        </div>
      </div>
    </>
  );
};
