import {Link as RouterLink} from 'react-router-dom';
// material
import {styled} from '@mui/material/styles';
import {Box, Card, Container, Link, Typography} from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import {RegisterForm} from '../sections/authentication/register';
import AuthSocial from '../sections/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({theme}) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({theme}) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
    return (
        <RootStyle title="Register | Minimal-UI">
            <AuthLayout>
                Ai deja cont? &nbsp;
                <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
                    Concteaza-te
                </Link>
            </AuthLayout>

            <SectionStyle sx={{display: {xs: 'none', md: 'flex'}}}>
                <Typography variant="h3" sx={{px: 5, mt: 10, mb: 5}}>
                    Comanda direct din magazinul online HNP
                </Typography>
                <img alt="register" src="/static/illustrations/illustration_register.png"/>
            </SectionStyle>

            <Container>
                <ContentStyle>
                    <Box sx={{mb: 5}}>
                        <Typography variant="h4" gutterBottom>
                            Creaza un cont gratuit.
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>
                            Nu este nevoie de un card de credit/debit..
                        </Typography>
                    </Box>

                    <AuthSocial/>

                    <RegisterForm/>

                    <Typography variant="body2" align="center" sx={{color: 'text.secondary', mt: 3}}>
                        Prin inregistrare iti dai acordul cu privire la &nbsp;
                        <Link underline="always" color="textPrimary">
                            Termeni si conditii
                        </Link>
                        &nbsp;si&nbsp;
                        <Link underline="always" color="textPrimary">
                            Privacy Policy
                        </Link>
                        .
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        sx={{
                            mt: 3,
                            textAlign: 'center',
                            display: {sm: 'none'}
                        }}
                    >
                        Ai deja cont?&nbsp;
                        <Link underline="hover" to="/login" component={RouterLink}>
                            Conecteaza-te
                        </Link>
                    </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
