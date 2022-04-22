import * as Yup from 'yup';
import {useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useFormik, Form, FormikProvider} from 'formik';
// material
import {
    Link,
    Stack,
    Checkbox,
    TextField,
    IconButton,
    InputAdornment,
    FormControlLabel,
} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
// firebase
import {setUser} from "../../../store/auth/authAction";
import {printErrorMessage} from "../../../apiCalls/apiMessage";
import {useDispatch} from "react-redux";
import {useAuth} from "../../../Auth";

// ----------------------------------------------------------------------

export default function LoginForm()
{
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });
    const {login, currentUser} = useAuth();
    console.log(currentUser);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: true,
        },
        validationSchema: LoginSchema,
        onSubmit: (data) =>
        {
            loginUser(data);
        },
    });

    const {errors, touched, values, handleSubmit, getFieldProps} = formik;

    const handleShowPassword = () =>
    {
        setShowPassword((show) => !show);
    };

    const loginUser = (formData) =>
    {
        login(formData.email, formData.password).then((data) =>
        {
            dispatch(setUser(data.user));
            navigate('/');
        }).catch((error) =>
        {

            printErrorMessage(error);
        });
    };

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
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
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        {...getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword} edge="end">
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{my: 2}}>
                    <FormControlLabel
                        control={<Checkbox {...getFieldProps('remember')} checked={values.remember}/>}
                        label="Remember me"
                    />

                    <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
                        Forgot password?
                    </Link>
                </Stack>

                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Login
                </LoadingButton>
            </Form>
        </FormikProvider>
    );
}
