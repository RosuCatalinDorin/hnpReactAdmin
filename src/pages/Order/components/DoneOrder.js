import {Button, Checkbox, Grid, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useAuth} from "../../../Auth";
import Iconify from "../../../components/Iconify";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {saveOrderAction} from "../action";
import {useDispatch} from "react-redux";
import {clearCart} from "../../../store/cart/cartAction";


export default function ButtonsOrder(props) {

    const {cart} = props;
    const {currentUser} = useAuth();
    const [acceptCondition, setAcceptCondition] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [error, setError] = useState(false);

    const clearCardOrderAddInDatabase = () => {
        dispatch(clearCart());
        navigate("/dashboard/app")
    }

    const confirmOrder = () => {
        if (!acceptCondition) {
            setError(true);
            return false
        }
        saveOrderAction(cart, currentUser, clearCardOrderAddInDatabase);
    }

    return (
        <>
            {currentUser.login === true ?
                <>
                    <Grid sx={{flexGrow: 1}} container>
                        <Grid item xs={12} md={1}>
                            <Checkbox onChange={() => {
                                setAcceptCondition(!acceptCondition)
                                acceptCondition ? setError(true) : setError(false)

                            }}/>
                        </Grid>
                        <Grid item xs={12} md={11} sx={{pt: 1.2}}>
                            <Typography color={error === true ? "error" : "default"}>Sunt de acrod cu <a href="#"><b>Termenii
                                si
                                conditiile
                                HNP</b></a></Typography>
                        </Grid>
                    </Grid>


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
                        Finalizeaza comanda</Button>
                </> :

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