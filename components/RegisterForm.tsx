import { registerUserSchema } from "@/validation/register.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { Formik } from "formik";
import React from "react";

const RegisterForm = () => {
  interface IRegisterForm {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dob: dayjs.Dayjs | string;
    gender: string;
    role?: ["seller", "buyer"];
    address: string;
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        role: ["seller", "buyer"],
        address: "",
      }}
      validationSchema={registerUserSchema}
      onSubmit={(values: IRegisterForm) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 shadow-2xl p-4 min-w-[400px] justify-center items-center"
          >
            <Typography variant="h5" className="text-gray-600">
              Register
            </Typography>

            <FormControl fullWidth>
              <TextField
                label="First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.firstName}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.lastName}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="DOB" {...formik.getFieldProps("dob")} />
              {formik.touched.dob && formik.errors.dob ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.dob}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Email" {...formik.getFieldProps("email")} />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.email}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.password}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Gender" {...formik.getFieldProps("gender")} />
              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.gender}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Role" {...formik.getFieldProps("role")} />
              {formik.touched.role && formik.errors.role ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.role}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Address" {...formik.getFieldProps("address")} />
              {formik.touched.address && formik.errors.address ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.address}
                </FormHelperText>
              ) : null}
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="bg-orange-400 text-base"
            >
              submit
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
