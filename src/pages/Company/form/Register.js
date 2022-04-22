import * as Yup from 'yup';
import {useFormik, Form, FormikProvider} from 'formik';
import {useNavigate} from 'react-router-dom';
// material
import {Stack, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
//functions
import { savePartner} from "../../../FireBase/actions";
import {printErrorMessage, printSuccessMessage} from "../../../apiCalls/apiMessage";

import {useAuth} from "../../../Auth";
// ----------------------------------------------------------------------

export default function RegisterForm(props)
{
    const {setLoadData,loadData,isOpen,setOpenModal} = props;
    const navigate = useNavigate();
    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Numele este obligatoriu'),
        reprezentantLegal: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Prenumele este obligatoriu'),
        consultantName: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Prenumele este obligatoriu'),
        consultantEmail: Yup.string().email('Email must be a valid email address').required('Email este obligatoiru'),
        email: Yup.string().email('Email must be a valid email address').required('Email este obligatoiru'),
        phone: Yup.string().required('Telefonul este obligatoiru').min(10, 'Trebuie sa fie de minim 10 caracatere.'),
        discount: Yup.number().required('Discount-ul este obligatorie').min(1, 'Trebuie sa fie de minim 6 caracatere.'),
     });
    const {currentUser} = useAuth();

    const formik = useFormik({
        initialValues: {
            name: '',
            reprezentantLegal: '',
            email: '',
            discount: '',
            phone: '',
            consultantEmail: '',
            consultantName:'',
        },
        validationSchema: RegisterSchema,
        onSubmit: (formData) =>
        {
            save(formData)
        },
    });

    const save = (formData) =>{
        const partner = {
            ...formData,
            ...{
                status:true,
                addBy:currentUser.email,
                dateAdd:new Date()
            }
        }
        // todo: check if exist
       savePartner(partner).then(()=>{
           printSuccessMessage("Partnerul a fost adaugat cu succes")
           setOpenModal(!isOpen);
           setLoadData(loadData+1);
       }).catch((error) =>
       {
           printErrorMessage(error);
       });
    }
    const {errors, touched, handleSubmit, getFieldProps} = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label="Nume partner"
                            {...getFieldProps('name')}
                            error={Boolean(touched.name && errors.name)}
                            helperText={touched.name && errors.name}
                        />

                        <TextField
                            fullWidth
                            label="Reprezentant legal"
                            {...getFieldProps('reprezentantLegal')}
                            error={Boolean(touched.reprezentantLegal && errors.reprezentantLegal)}
                            helperText={touched.reprezentantLegal && errors.reprezentantLegal}
                        />
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
                        <TextField
                            fullWidth
                            label="Telefon"
                            {...getFieldProps('phone')}
                            error={Boolean(touched.phone && errors.phone)}
                            helperText={touched.phone && errors.phone}
                        />
                        <TextField
                            fullWidth
                            label="Discount"
                            {...getFieldProps('discount')}
                            error={Boolean(touched.discount && errors.discount)}
                            helperText={touched.discount && errors.discount}
                        />
                    </Stack>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="consultantEmail"
                        label="Consultant email"
                        {...getFieldProps('consultantEmail')}
                        error={Boolean(touched.consultantEmail && errors.consultantEmail)}
                        helperText={touched.consultantEmail && errors.consultantEmail}
                    />
                    <TextField
                        fullWidth
                        label="Nume consultant"
                        {...getFieldProps('consultantName')}
                        error={Boolean(touched.consultantName && errors.consultantName)}
                        helperText={touched.consultantName && errors.consultantName}
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
