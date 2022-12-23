import {motion} from 'framer-motion';
import {Link as RouterLink} from 'react-router-dom';
// material
import {styled} from '@mui/material/styles';
import {Box, Button, Container, Typography} from '@mui/material';
// components
import {MotionContainer, varBounceIn} from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({theme}) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
    return (
        <RootStyle title="404 Page Not Found | HNP">
            <Container>
                <MotionContainer initial="initial" open>
                    <Box sx={{maxWidth: 480, margin: 'auto', textAlign: 'center'}}>
                        <motion.div variants={varBounceIn}>
                            <Typography variant="h3" paragraph>
                                Ups, pagina nu gasita!
                            </Typography>
                        </motion.div>
                        <Typography sx={{color: 'text.secondary'}}>
                            Ne pare rau, in acest moment exista doar pagina de produse.
                        </Typography>

                        <motion.div variants={varBounceIn}>
                            <Box
                                component="img"
                                src="/static/illustrations/illustration_404.svg"
                                sx={{height: 260, mx: 'auto', my: {xs: 5, sm: 10}}}
                            />
                        </motion.div>

                        <Button to="/dashboard/Products" size="large" variant="contained" component={RouterLink}>
                            Inapoi la PRODUSE
                        </Button>
                    </Box>
                </MotionContainer>
            </Container>
        </RootStyle>
    );
}
