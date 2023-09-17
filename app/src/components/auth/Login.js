import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import { useCookies } from "react-cookie";
import { Box, Button, TextField } from "@mui/material";

const validationSchema = yup.object({
  email: yup.string("Enter your email").required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const [cookies, setCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email: values.email,
            password: values.password,
          }
        );

        if (response.data && response.data.token) {
          setCookie("jwt", response.data.token, { path: "/" });

          localStorage.setItem("user", JSON.stringify(response.data));
          console.log("Login success!");

          navigate("/");
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    const jwtCookie = cookies.jwt;
    if (jwtCookie) {
      navigate("/");
    }
  }, [cookies.jwt, navigate]);

  return (
    <div className="form-input">
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          flexDirection="column"
          maxWidth="400px"
          margin="auto"
          marginTop={2}
          padding={5}
          backgroundColor="rgb(243, 239, 239)"
          borderRadius={5}
          boxShadow={"7px 5px 2px #ccc"}
        >
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 3 }}>
            {"New here?"}&nbsp;{" "}
            <Link to="/register" style={{ marginLeft: "0.5em" }}>
              Register
            </Link>
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
