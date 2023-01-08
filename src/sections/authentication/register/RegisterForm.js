import * as Yup from 'yup';
import {useState} from 'react';
import {Form, FormikProvider, useFormik} from 'formik';
import {useNavigate} from 'react-router-dom';
// material
import {IconButton, InputAdornment, Stack, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
//functions
import {registerUser, saveUserDetails} from "../../../FireBase/actions";
import {printErrorMessage} from "../../../apiCalls/apiMessage";
import {useDispatch} from "react-redux";
import {setUser} from "../../../store/auth/authAction";

// ----------------------------------------------------------------------

export default function RegisterForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Numele este obligatoriu'),
        lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Prenumele este obligatoriu'),
        email: Yup.string().email('Email must be a valid email address').required('Email este obligatoiru'),
        department: Yup.string().required('Departament-ul este obligatoiru').min(6, 'Trebuie sa fie de minim 6 caracatere.'),
        phone: Yup.string().required('Telefonul este obligatoiru').min(6, 'Trebuie sa fie de minim 6 caracatere.'),
        position: Yup.string().required('Functia este obligatorie').min(6, 'Trebuie sa fie de minim 6 caracatere.'),
        password: Yup.string().required('Password este obligatorie').min(6, 'Parola trebuie sa fie de minim 6 caracatere.'),
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            department: '',
            phone: '',
            position: '',
            password: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: (formData) => {
            registerUser(formData.email, formData.password).then((data) => {

                dispatch(setUser(data.user));
                const userDetails = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    department: formData.department,
                    phone: formData.phone,
                    position: formData.position,
                    role: "ROLE_USER",
                    companyId: null,
                    dateCreate: new Date(),
                    companyName: "",
                    displayName: formData.lastName + " " + formData.firstName,
                    isVerified: false,
                    status: false,
                };
                saveUserDetails(data.user.uid, userDetails).then(r => navigate('/'));
            }).catch((error) => {
                printErrorMessage(error);
            });
        },
    });

    const {errors, touched, handleSubmit, getFieldProps} = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
                        <TextField
                            fullWidth
                            label="First name"
                            {...getFieldProps('firstName')}
                            error={Boolean(touched.firstName && errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                        />

                        <TextField
                            fullWidth
                            label="Last name"
                            {...getFieldProps('lastName')}
                            error={Boolean(touched.lastName && errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                        />
                    </Stack>
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
                            label="Functie"
                            {...getFieldProps('position')}
                            error={Boolean(touched.position && errors.position)}
                            helperText={touched.position && errors.position}
                        />
                    </Stack>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <TextField
                        fullWidth
                        label="Departament"
                        {...getFieldProps('department')}
                        error={Boolean(touched.department && errors.department)}
                        helperText={touched.department && errors.department}
                    />
                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        {...getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                    >
                        Register
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    );
}
