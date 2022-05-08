import * as Yup from 'yup';
import {useFormik, Form, FormikProvider} from 'formik';
import {useNavigate} from 'react-router-dom';
// material
import {Stack, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
//components
import MyAutoComplete from '../../../components/MyAutoComplete';

//functions
import {getCollection, savePartner, saveUserCompany} from "../../../FireBase/actions";
import {printErrorMessage, printSuccessMessage} from "../../../apiCalls/apiMessage";

import {useAuth} from "../../../Auth";
import {useEffect, useState} from "react";
// ----------------------------------------------------------------------

export default function RegisterForm(props)
{
    const {setLoadData,loadData,isOpen,setOpenModal,editRow} = props;
    const [partners,setPartners] =useState([]);
    const RegisterSchema = Yup.object().shape({
        partners: Yup.object().required('Te rog selecteaza o potiune'),
    });
    const {currentUser} = useAuth();

    const formik = useFormik({
        initialValues: {
            partners: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (formData) => {save(formData)},
    });

    const save = (formData) =>{
        const data = {
            user:editRow,
            company:formData.partners
        };
        saveUserCompany(data).then(()=>{
            printSuccessMessage("Succes")
            setOpenModal(!isOpen);
            setLoadData(loadData+1);
        }).catch((error) =>
        {
            printErrorMessage(error);
        });
    }

    useEffect(()=>{
        getCollection('partners').then((data)=>{
            setPartners(data);
        })
    },[])



    const {errors, touched, handleSubmit} = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <MyAutoComplete
                        id="partners"
                        name="partners"
                        label="Alege partenerul"
                        options = {partners}
                        getOptionLabel={(option) => option.name}
                        error={Boolean(touched.partners && errors.partners)}
                        helperText={touched.partners && errors.partners}
                        formik ={formik}

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
    );
}
