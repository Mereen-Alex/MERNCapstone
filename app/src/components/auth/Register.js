import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(
      8,
      "Password should be of minimum 8 characters length with 1 number, 1 alphabet, and 1 special character"
    )
    .required("Password is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          values
        );

        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("Registered successfully! Please login.");

        toast.success("Registered successfully! Please login.");        

        navigate("/login");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message === "User already exists"
        ) {
          console.error("User already exists.");

          toast.error("You have already registered. Please login.");

          navigate("/login");
        } else {
          console.error(error);

          toast.error("Registration failed. Please try again.");
        }
      }
    },
  });

  return (
    <div className="register-container">
      
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={0}
          padding={3}
          backgroundColor="rgb(243, 239, 239)"
          borderRadius={5}
          boxShadow={"5px 5px 2px #ccc"}
        >
          <Typography gutterBottom variant="h5">
            Create an Account
          </Typography>
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="username"
            name="username"
            label="Username:"
            autoComplete="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="password"
            name="password"
            label="Password:"
            type="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="email"
            name="email"
            label="Email:"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            sx={{ marginTop: 1, marginBottom: 1, borderRadius: 3 }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Register
          </Button>
          <Button sx={{ marginTop: 0, borderRadius: 3 }}>
            {"Already have an account?"}&nbsp;{" "}
            <Link to="/login" style={{ marginLeft: "0.5em" }}>
              Login
            </Link>
          </Button>
        </Box>
      </form>
      
    </div>
  );
};

export default Register;
