import {Form, FormikProvider, useFormik} from "formik";
import {Button, Grid, Stack, TextField, Typography} from "@mui/material";
import * as Yup from "yup";
import RichText from "../../components/RichText";
import React from "react";
import Iconify from "../../components/Iconify";
import MyUpload from "../../components/Upload/Upload";

export default function  NewPost(props) {

    const {onSubmit} =props
    const validation = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Titlul este obligatoriu'),
        content: Yup.string().min(2, 'Too Short!').required('Continutul este obligatoriu'),
        cardImage: Yup.string().required('Incarcarea unei fotografii este obligatorie'),
    });

    const formik = useFormik({
        initialValues: {
            title:"",
            content:"",
            cardImage:"",
        },
        validationSchema: validation,
        onSubmit: (formData) =>
        {
            onSubmit(formData);
        },
    });
    const {errors, touched, handleSubmit, getFieldProps,setFieldValue} = formik;
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid spacing={3} style={{marginTop:10}}>
                    <TextField
                        fullWidth
                        label="Titlu noutate"
                        {...getFieldProps('title')}
                        error={Boolean(touched.title && errors.title)}
                        helperText={touched.title && errors.title}
                    />
                    <MyUpload
                        label='Poza prezentare'
                        error={Boolean(touched.cardImage && errors.cardImage)}
                        errorMessage = {touched.cardImage && errors.cardImage}
                        onChange = {(data)=>{
                            formik.setFieldValue("cardImage",data);
                        }}
                    />
                    <Stack >
                        <Stack direction={{xs: 'column', sm: 'row'}}>
                            <RichText
                                name={"content"}
                                style={{border: "none"}}
                                value={formik.values.content}
                                onChange={(data)=>{setFieldValue('content',data)}}
                                error={Boolean(touched.content && errors.content)}
                                errorMessage = {touched.content && errors.content}
                            />

                        </Stack>
                    </Stack>

                </Grid>
                <Button
                    variant="contained"
                    onClick={()=>{formik.submitForm()}}
                    startIcon={<Iconify icon="eva:plus-fill" />} >
                    Salveaza
                </Button>
            </Form>
        </FormikProvider>)
}