import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { cleanErrorMessage, register } from "../../store/userSlice";
import background from "../../assets/bg.jpg";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { RegisterCredentials } from "../../models/User";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { StyledLabel } from "./styles";

const initialValues: RegisterCredentials = {
  email: "",
  username: "",
  password: "",
  comfirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Nie poprawny format.")
    .required("To pole jest wymagane."),
  username: Yup.string().required("To pole jest wymagane."),
  password: Yup.string()
    .required("To pole jest wymagane.")
    .matches(/^.{6,}$/, "Minimum 6 znaków"),
  comfirmPassword: Yup.string()
    .required("To pole jest wymagane.")
    .oneOf([Yup.ref("password"), null], "Podano inną wartość")
    .matches(/^.{6,}$/, "Minimum 6 znaków"),
});

export const Register = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const errorMessage = useSelector(
    (state: RootState) => state.users.errorMessage
  );

  const onSubmit = (values: RegisterCredentials) => {
    dispatch(
      register({
        email: formik.values.email,
        username: formik.values.username,
        password: formik.values.password,
        comfirmPassword: formik.values.comfirmPassword,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/browse");
        dispatch(cleanErrorMessage());
      });
  };

  useEffect(() => {
    return () => {
      dispatch(cleanErrorMessage());
    };
  }, []);

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
            <h2>Register</h2>
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
                type="text"
                id="username"
                {...formik.getFieldProps("username")}
              />
              <StyledLabel active={!!formik.values.username} htmlFor="username">
                Username
              </StyledLabel>
              {formik.touched.username && formik.errors.username ? (
                <div className="error">{formik.errors.username}</div>
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
            <div className="signup-container__control">
              <input
                type="password"
                id="comfirmPassword"
                {...formik.getFieldProps("comfirmPassword")}
              />
              <StyledLabel
                active={!!formik.values.comfirmPassword}
                htmlFor="comfirmPassword"
              >
                Confirm password
              </StyledLabel>
              {formik.touched.comfirmPassword &&
              formik.errors.comfirmPassword ? (
                <div className="error">{formik.errors.comfirmPassword}</div>
              ) : null}
            </div>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            {!!errorMessage && <div className="error">{errorMessage}</div>}
          </form>
          <Link to="/login">Back</Link>
        </div>
      </div>
    </>
  );
};
