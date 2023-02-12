import {Button, Grid, Typography} from "@mui/material";
import Iconify from "../../../components/Iconify";
import * as React from "react";
import {useAuth} from "../../../Auth";

export default function OrderButtons(props) {
    const {confirmOrder, error} = props;
    const {currentUser} = useAuth();
    return (
        <>
            {currentUser.userDetails.status === true ?
                <Button
                    sx={{
                        width: '100%',
                        height: 50,
                        mt: 2,
                    }}
                    variant="contained"
                    onClick={confirmOrder}
                    startIcon={<Iconify icon="material-symbols:done"/>}
                >
                    Finalizeaza comanda</Button> :

                <Grid item xs={12} md={11} sx={{pt: 1.2}}>
                    <Typography color={"error"}>
                        Contul tau este inactiv, pentru a putea plasa o comanda trebuie sa contactezi un representat HNP
                        pentru identificarea
                    </Typography>
                </Grid>

            }
        </>
    );
}