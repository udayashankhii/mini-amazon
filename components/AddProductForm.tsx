"use client";
import { productCategoriesForDropDown } from "@/constant/general-constant";
import { productSchema } from "@/validation/product.schema";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { Formik } from "formik";

interface IAddProductForm {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  category: string;
  freeShipping: "true" | "false";
  description: string;
}

const AddProductForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        brand: "",
        price: 0,
        quantity: 1,
        category: "",
        freeShipping: "false",
        description: "",
      }}
      validationSchema={productSchema}
      onSubmit={(values: IAddProductForm) => {
        console.log({
          ...values,
          freeShipping: values.freeShipping === "true",
        });
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-8 shadow-2xl rounded p-4 min-w-[450px] justify-center items-center"
          >
            <Typography variant="h5" className="text-gray-600">
              Add Product
            </Typography>

            <FormControl fullWidth>
              <TextField label="Name" {...formik.getFieldProps("name")} />
              {formik.touched.name && formik.errors.name ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.name}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField label="Brand" {...formik.getFieldProps("brand")} />
              {formik.touched.brand && formik.errors.brand ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.brand}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                type="number"
                label="Price"
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.price}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <TextField
                type="number"
                label="Quantity"
                {...formik.getFieldProps("quantity")}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.quantity}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category" {...formik.getFieldProps("category")}>
                {productCategoriesForDropDown.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>

              {formik.touched.category && formik.errors.category ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.category}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FormLabel>Free Shipping</FormLabel>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
                defaultValue={"false"}
                {...formik.getFieldProps("freeShipping")}
              >
                <FormControlLabel
                  control={<Radio color="secondary" />}
                  value={"true"}
                  label="Yes"
                />
                <FormControlLabel
                  value={"false"} // empty string is referred as false
                  control={<Radio color="secondary" />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth>
              <TextField
                label="Description"
                multiline
                minRows={4}
                maxRows={8}
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <FormHelperText className="text-base" error>
                  {formik.errors.description}
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

export default AddProductForm;
