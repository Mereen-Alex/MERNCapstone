import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axiosConfig";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const validationSchema = yup.object({
  fullname: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phonenumber: yup.string("").required("Phone number is required"),
  address: yup.string().required("Address is required"),
  isAdmin: yup.boolean(),
});

const UserProfile = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      phonenumber: "",
      email: "",
      address: {
        addressLine1: "",
        street: "",
        city: "",
        state: "",
        pinCode: "",
        country: "",
      },
      isAdmin: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/profile",
          values
        );
        console.log("Form successfully submitted!");
        toast.success("Profile form submitted successfully!");
        console.log(response.data);

        navigate("/");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="profile-container">
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
            My Account
          </Typography>
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="fullname"
            name="fullname"
            label="Full-Name:"
            autoComplete="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
            helperText={formik.touched.fullname && formik.errors.fullname}
          />
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
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="phonenumber"
            name="phonenumber"
            label="Phone-Number:"
            autoComplete="off"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phonenumber && Boolean(formik.errors.phonenumber)
            }
            helperText={formik.touched.phonenumber && formik.errors.phonenumber}
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="addressLine1"
            name="address.addressLine1"
            label="Address Line 1:"
            autoComplete="address-line1"
            value={formik.values.address.addressLine1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address?.addressLine1 &&
              Boolean(formik.errors.address?.addressLine1)
            }
            helperText={
              formik.touched.address?.addressLine1 &&
              formik.errors.address?.addressLine1
            }
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="street"
            name="address.street"
            label="Street:"
            autoComplete="street"
            value={formik.values.address.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address?.street &&
              Boolean(formik.errors.address?.street)
            }
            helperText={
              formik.touched.address?.street && formik.errors.address?.street
            }
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="city"
            name="address.city"
            label="City:"
            autoComplete="city"
            value={formik.values.address.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address?.city &&
              Boolean(formik.errors.address?.city)
            }
            helperText={
              formik.touched.address?.city && formik.errors.address?.city
            }
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="state"
            name="address.state"
            label="State:"
            autoComplete="state"
            value={formik.values.address.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address?.state &&
              Boolean(formik.errors.address?.state)
            }
            helperText={
              formik.touched.address?.state && formik.errors.address?.state
            }
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="pinCode"
            name="address.pinCode"
            label="Postal Code:"
            autoComplete="postal-code"
            value={formik.values.address.pinCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address?.pinCode &&
              Boolean(formik.errors.address?.pinCode)
            }
            helperText={
              formik.touched.address?.pinCode && formik.errors.address?.pinCode
            }
          />
          <TextField
            fullWidth
            style={{ margin: "4px 0" }}
            margin="normal"
            id="country"
            name="address.country"
            label="Country:"
            autoComplete="country"
            value={formik.values.address.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address?.country &&
              Boolean(formik.errors.address?.country)
            }
            helperText={
              formik.touched.address?.country && formik.errors.address?.country
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                name="isAdmin"
                color="primary"
                checked={formik.values.isAdmin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="Admin:"
            labelPlacement="start"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          />

          <Button
            sx={{ marginTop: 1, marginBottom: 1, borderRadius: 3 }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default UserProfile;
