import {motion} from 'framer-motion';
// material
import {styled} from '@mui/material/styles';
import {Box, Checkbox, Container, Typography} from '@mui/material';
// components
import {MotionContainer, varBounceIn} from '../components/animate';
import Page from '../components/Page';
import {useAuth} from "../Auth";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({theme}) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function UserNotActive() {
    const {currentUser} = useAuth();
    return (
        <RootStyle title="Cont Inactiv">
            <Container>
                <MotionContainer initial="initial" open>
                    <Box sx={{maxWidth: 550, margin: 'auto', textAlign: 'center'}}>
                        <motion.div variants={varBounceIn}>
                            <Typography variant="h4" paragraph>
                                Utilizatorul inactiv.
                            </Typography>
                        </motion.div>

                        <Box sx={{textAlign: 'left', mt: 2, margin: 'auto',}}>
                            <Typography sx={{color: 'text.secondary'}}>
                                Pentru a activa contul va rugam parcurgeti pasii de mai jos.
                            </Typography>
                            <Typography sx={{color: 'text.secondary', mt: 3}}>
                                <Checkbox disabled checked={currentUser.emailVerified}/>
                                <b>Pasul 1</b> : Acesati link-ul trimis pe
                                email pentru confirmarea adresei de mail.
                            </Typography>

                            <Typography sx={{color: 'text.secondary'}}>
                                <Checkbox disabled checked={currentUser.userDetails.status}/>
                                <b>Pasul 2
                                </b> : Contacati un reprezentant HNP pentru identificare. </Typography>
                        </Box>

                        <motion.div variants={varBounceIn}>
                            <Box
                                component="img"
                                src="/static/illustrations/user-svgrepo-com.svg"
                                sx={{height: 260, mx: 'auto', my: {xs: 5, sm: 10}}}
                            />
                        </motion.div>
                    </Box>
                </MotionContainer>
            </Container>
        </RootStyle>
    );
}
