import {motion} from 'framer-motion';
// material
import {styled} from '@mui/material/styles';
import {Box, Button, Container, Typography} from '@mui/material';
// components
import {MotionContainer, varBounceIn} from '../components/animate';
import Page from '../components/Page';
import {useEffect, useState} from "react";
import {useAuth} from "../Auth";
import {Link as RouterLink, useParams} from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({theme}) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));


export default function ConfirmEmail() {

    let {id} = useParams();
    const {currentUser} = useAuth();
    debugger;
    const [message, setMessage] = useState();
    const [desc, setDesc] = useState();
    const [svg, setSvg] = useState();

    const succesMessage = () => {
        setMessage("Adresa de mail a fost verificata.")
        setDesc(" Iti multumim pentru incredere, acum poti contiuna cumparaturile pe magazinul tau preferat!");
        setSvg("/static/illustrations/approved.png");
    }
    const errorMessage = () => {
        setMessage("Ups... eroare :(");
        setDesc("Am intampinat o problema in validarea adresei de mail. Te rugam sa incerci mai tarziu.");
        setSvg("/static/illustrations/browserError.png");

    }

    useEffect(async () => {
        succesMessage()
    }, [])

    return (
        <RootStyle title="HNP - Magazin Online">
            <Container>
                <MotionContainer initial="initial" open>
                    <Box sx={{maxWidth: 480, margin: 'auto', textAlign: 'center'}}>
                        <motion.div variants={varBounceIn}>
                            <Typography variant="h3" paragraph>
                                {message}
                            </Typography>
                        </motion.div>
                        <Typography sx={{color: 'text.secondary'}}>
                            {desc}
                        </Typography>

                        <motion.div variants={varBounceIn}>
                            <Box
                                component="img"
                                src={svg}
                                sx={{height: 260, mx: 'auto', my: {xs: 5, sm: 10}}}
                            />
                        </motion.div>

                        <Button to="/" size="large" variant="contained" component={RouterLink}>
                            ACASA
                        </Button>
                    </Box>
                </MotionContainer>
            </Container>
        </RootStyle>
    );
}
