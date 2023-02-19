import * as Yup from "yup";
import {addLocationSchema, formInitialValues} from "./constants";
import {Form, FormikProvider, useFormik} from "formik";
import {Stack, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useAuth} from "../../../../../Auth";

export default function AddLocationForm(props) {

    const {
        callBackFunction, submitForm
    } = props;
    const {currentUser} = useAuth();
    const validationSchema = Yup.object().shape(addLocationSchema);
    const formik = useFormik({
        initialValues: formInitialValues(currentUser.uid),
        validationSchema: validationSchema,
        onSubmit: (formData) => {
            submitForm(formData, callBackFunction)
        },
    });
    const {errors, touched, handleSubmit, getFieldProps} = formik;
    
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                        fullWidth
                        label="Persoana de contact"
                        {...getFieldProps('userName')}
                        error={Boolean(touched.userName && errors.userName)}
                        helperText={touched.userName && errors.userName}
                    />
                    <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
                        <TextField
                            fullWidth
                            label="Judet"
                            {...getFieldProps('judet')}
                            error={Boolean(touched.judet && errors.judet)}
                            helperText={touched.judet && errors.judet}
                        />
                        <TextField
                            fullWidth
                            label="Oras/Comuna/Sat"
                            {...getFieldProps('oras')}
                            error={Boolean(touched.oras && errors.oras)}
                            helperText={touched.oras && errors.oras}
                        />

                    </Stack>
                    <TextField
                        fullWidth
                        label="Adresa"
                        {...getFieldProps('adress')}
                        error={Boolean(touched.adress && errors.adress)}
                        helperText={touched.adress && errors.adress}
                    />
                    <TextField
                        fullWidth
                        label="Telefon"
                        {...getFieldProps('telefon')}
                        error={Boolean(touched.telefon && errors.telefon)}
                        helperText={touched.telefon && errors.telefon}
                    />

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Salveaza
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    )

}