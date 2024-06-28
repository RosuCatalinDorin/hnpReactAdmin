import {Box, Card, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import {useEffect, useState} from "react";
import {getDocumentsActiveProperty} from "../../../FireBase/actions";
import {useAuth} from "../../../Auth";


export default function SelectOrderDelivaryAdress(props) {
    const {setAddress, error, setAddressError} = props
    const [addressId, setAddressId] = useState(null);
    const [addressList, setAddressList] = useState([]);
    const {currentUser} = useAuth();


    useEffect(async () => {
        const data = await getDocumentsActiveProperty('customerDeliveryAddress', 'userId', currentUser.uid);
        setAddressList(data);
    }, [])

    return (
        <Card>
            <Box sx={{ml: 4, mt: 4, mb: 2}}>
                <Box sx={{mb: 2}}>
                    <Typography variant="h6" sx={{display: 'flex'}} color={error === true ? "error" : "default"}>
                        Alege adresa de livrare
                    </Typography>
                </Box>

                <FormControl>
                    <RadioGroup

                        defaultValue=" female"
                        name=" radio-buttons-group"
                        value={addressId}
                        onChange={(event) => {
                            setAddressId(event.target.value)
                            setAddressError(false);
                            setAddress(addressList.filter(address => address.uid === event.target.value))
                        }}
                    >
                        {addressList.map((row, index) => (
                            <FormControlLabel sx={{mt: 1}} key={index} value={row.uid} control={<Radio/>}
                                              label={row.userName + " - " + row.telefon + " " + row.adress + ", " + row.oras + ", " + row.judet}/>
                        ))}

                    </RadioGroup>
                </FormControl>
                {error === true ?
                    <Box sx={{mt: 2}}> <Typography variant="inherit" color="error">
                        Selecteaza o adresa de livrare.
                    </Typography></Box> : ""
                }
            </Box>
        </Card>
    )
}