"use client";
import { loginCredentialSchema } from "@/validation/login.user.schema";
import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";

interface ILoginForm {
  email: string;
  password: string;
}
const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginCredentialSchema}
      onSubmit={(values: ILoginForm) => {
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
              Login
            </Typography>

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

export default LoginForm;
