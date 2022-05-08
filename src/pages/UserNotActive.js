import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function UserNotActive(currentUser) {

    return (
        <RootStyle title="404 Page Not Found | Minimal-UI">
            <Container>
                <MotionContainer initial="initial" open>
                    <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                        <motion.div variants={varBounceIn}>
                            <Typography variant="h3" paragraph>
                                Utilizatorul dumneavoastra  este inactiv! :(
                            </Typography>
                        </motion.div>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Pentru a activa contul va rugam confirmati adresa de email si concatati un reprezentant HNP pentru identificare.
                        </Typography>

                        <motion.div variants={varBounceIn}>
                            <Box
                                component="img"
                                src="/static/illustrations/user-svgrepo-com.svg"
                                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                            />
                        </motion.div>

{/*                        <Button to="/" size="large" variant="contained" component={RouterLink}>
                            Go to Home
                        </Button>*/}
                    </Box>
                </MotionContainer>
            </Container>
        </RootStyle>
    );
}
