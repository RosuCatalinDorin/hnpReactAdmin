import {Button} from "@mui/material";
import * as React from "react";
import {useAuth} from "../../../Auth";
import Iconify from "../../../components/Iconify";
import {Link as RouterLink} from "react-router-dom";

export default function ButtonsOrder(props) {

    const {cart} = props;
    const {currentUser} = useAuth();

    return (
        <>
            {currentUser.login === true ?
                <Button
                    sx={{
                        width: '100%',
                        height: 50,
                        mt: 2,
                    }}
                    variant="contained"
                    onClick={() => {

                    }}
                    startIcon={<Iconify icon="material-symbols:done"/>}
                >Fnaizeaza comanda</Button> :

                <Button
                    sx={{
                        width: '100%',
                        height: 50,
                        mt: 2,
                    }}
                    variant="outlined"
                    onClick={() => {

                    }}
                    to={"/login"}
                    component={RouterLink}
                    startIcon={<Iconify icon="material-symbols:login"/>}
                >Login</Button>
            }
        </>
    );
}