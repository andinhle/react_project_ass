import {
    Button,
    Stack,
} from "@mui/material";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { CategoriesFormParams } from "src/types/Product";
import { InputText } from "./elements/InputText";

type ProductCategories = {
    onSubmit: (values: CategoriesFormParams) => void;
    initialValues?: any;
};

function ProductForm({ onSubmit, initialValues }: ProductCategories) {
    const validate = (values: CategoriesFormParams) => {
        const { name, description } = values;
        const errors: ValidationErrors = {};
        if (!name) errors.title = "Cần nhập tên sản phẩm";
        if (name && name.length < 6)
            errors.title = "Cần nhập tối thiểu 6 kí tự";
        if (!description) errors.price = "Cần nhập giá";
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
                            name="name"
                            render={({ input, meta }) => (
                                <InputText
                                    input={input}
                                    label={"Title"}
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
