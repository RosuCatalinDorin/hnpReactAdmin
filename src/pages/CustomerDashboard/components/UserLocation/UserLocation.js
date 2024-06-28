import {Box, Button, Card, Grid, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as React from "react";
import {useEffect, useState} from "react";
import Modal from "../../../../components/Modal";
import AddLocationForm from "./AddLocationForm/AddLocationForm";
import {saveCustomerDeliveryAddress} from "./actions/formActions";
import {getDocumentsActiveProperty} from "../../../../FireBase/actions";
import {useAuth} from "../../../../Auth";

const commonStyles = {
    width: '100%',
    height: '5rem',
    flexGrow: 1
};


export default function UserLocation() {

    const [openModal, setOpenModal] = useState();
    const [address, setAddress] = useState([]);
    const {currentUser} = useAuth();

    useEffect(async () => {
        const data = await getDocumentsActiveProperty('customerDeliveryAddress', 'userId', currentUser.uid);
        setAddress(data);
    }, [])

    return (
        <>
            <Modal
                isOpen={openModal}
                setOpenModal={setOpenModal}
                title="Adauga locatie de livrare"

            >
                <AddLocationForm
                    callBackFunction={() => {
                        setOpenModal(!openModal)
                    }}
                    submitForm={saveCustomerDeliveryAddress}
                />
            </Modal>
            <Card>
                <Grid sx={{flexGrow: 1}} container>
                    <Grid item xs={12} md={12}>
                        <Grid sx={{flexGrow: 1}} container>
                            <Typography sx={{m: 2}} variant="inherit" gutterBottom>
                                Adresele mele de livrare </Typography>
                            <Box sx={{mt: 1, ml: 5}}>
                                <Button variant="outlined"
                                        onClick={() => {
                                            setOpenModal(true)
                                        }}
                                ><AddIcon/></Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{p: 1}}>
                        {address.map((row, index) => (
                            <Card sx={{
                                ':hover': {
                                    boxShadow: 2,
                                },
                                mt: 2
                            }}>
                                <Grid container sx={{...commonStyles, borderRadius: '16px'}} key={index}>

                                    <Grid item xs={2} md={2}>
                                        <LocationOnIcon sx={{ml: 1, mt: 1}}/>
                                    </Grid>
                                    <Grid item xs={10} md={10}>
                                        <Box>
                                            <Typography variant="caption" gutterBottom>
                                                {row.userName + " - " + row.telefon} </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" gutterBottom>
                                                {row.adress + ", " + row.oras + ", " + row.judet} </Typography>
                                        </Box>
                                        {/*
                                            <Box sx={{mb: 2}}>
                                            <Button variant="text"
                                                    style={{color: "blue"}}
                                                    onClick={() => {deleteLocation(row.uid)}}
                                            >sterge</Button>
                                        </Box>*/}
                                    </Grid>
                                </Grid>
                            </Card>
                        ))}

                    </Grid>
                </Grid>

            </Card>
        </>
    )
}