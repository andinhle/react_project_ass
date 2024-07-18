import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { ProductFormParams } from "src/types/Product";
import { InputText } from "./elements/InputText";


type ProductFormProps = {
  onSubmit: (values: ProductFormParams) => void;
  initialValues?: any;
};
function ProductForm({ onSubmit, initialValues }: ProductFormProps) {
  const validate = (values: ProductFormParams) => {
    const { title, image, category, price } = values;
    const errors: ValidationErrors = {};
    if (!title) errors.title = "Cần nhập tên sản phẩm";
    if (title && title.length < 6)
      errors.title = "Cần nhập tối thiểu 6 kí tự";
    if (!image) errors.image = "Cần nhập ảnh vào";
    if (!category) errors.category = "Cần nhập danh mục";
    if (!price) errors.price = "Cần nhập giá";
    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ values }) => {
        return (
          <Stack>
            <Field
              name="title"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Title"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field
              name="image"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Image"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field<string>
              name="description"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Description"}
                  messageError={meta.touched && meta.error}
                />
              )}
            />
            <Field<number>
              name="price"
              render={({ input, meta }) => (
                <InputText
                  input={input}
                  label={"Price"}
                  messageError={meta.touched && meta.error}
                  type="number"
                />
              )}
            />
            <Field<string>
              name="isShow"
              type="checkbox"
              render={({ input, meta }) => {
                return (
                  <FormControlLabel
                    control={<Checkbox {...input} />}
                    label="Show Product"
                  />
                );
              }}
            />
            <Field<string>
              name="category"
              render={({ input, meta }) => {
                return (
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select label="Category" {...input} error={meta.touched && !!meta.error}>
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem>
                        Thời trang 1
                      </MenuItem>
                    </Select>
                    {meta.touched && meta.error && (
                      <FormHelperText>{meta.error}</FormHelperText>
                    )}
                  </FormControl>
                );
              }}
            />

            <Button
              type="submit"
              onClick={() => onSubmit(values)}
              sx={{
                backgroundColor: 'primary.main',
                color: 'black',
                margin: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              Submit
            </Button>

          </Stack>
        );
      }}
    />
  );
}

export default ProductForm;
