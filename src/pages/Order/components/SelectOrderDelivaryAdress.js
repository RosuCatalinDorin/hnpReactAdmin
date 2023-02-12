import {Box, Card, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import {useState} from "react";

const addressList = [
    {
        "uid": "1",
        "oras": "Cluj Napoca",
        "adress": "Sub Cetate nr 12F ap1",
        "judet": "Cluj",
        "userName": "Catalin Rosu",
        "telefon": "0758956708"
    },
    {
        "uid": "2",
        "oras": "Cluj Napoca",
        "adress": "Sub Cetate nr 12F ap1",
        "judet": "Cluj",
        "userName": "Catalin Rosu",
        "telefon": "0758956708"
    },
    {
        "uid": "3",
        "oras": "Cluj Napoca",
        "adress": "Sub Cetate nr 12F ap1",
        "judet": "Cluj",
        "userName": "Catalin Rosu",
        "telefon": "0758956708"
    }
]
export default function SelectOrderDelivaryAdress(props) {
    const {setAddress, totalCartItems, error, setAddressError} = props
    const [addressId, setAddressId] = useState(null);

    return (
        <Card>
            <Box sx={{ml: 4, mt: 4, mb: 2}}>
                <Box sx={{mb: 2}}>
                    <Typography variant="h6" sx={{display: 'flex'}} color={error === true ? "error" : "default"}>
                        Alege adresa de livrare<Typography
                        sx={{mt: 0.3, ml: 1}}> ( {totalCartItems} produse ) </Typography>
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