import {Box, Button, Card, Grid, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as React from "react";

const commonStyles = {
    width: '100%',
    height: '5rem',
    flexGrow: 1
};


export default function UserLocation() {

    const deleteLocation = (uid) => {

    }

    const address = [
        {
            "uid": "",
            "oras": "Cluj Napoca",
            "adress": "Sub Cetate nr 12F ap1",
            "judet": "Cluj",
            "userName": "Catalin Rosu",
            "telefon": "0758956708"
        },
        {
            "uid": "",
            "oras": "Cluj Napoca",
            "adress": "Sub Cetate nr 12F ap1",
            "judet": "Cluj",
            "userName": "Catalin Rosu",
            "telefon": "0758956708"
        },
        {
            "uid": "",
            "oras": "Cluj Napoca",
            "adress": "Sub Cetate nr 12F ap1",
            "judet": "Cluj",
            "userName": "Catalin Rosu",
            "telefon": "0758956708"
        }
    ];

    return (
        <Card>
            <Grid sx={{flexGrow: 1}} container>
                <Grid item xs={12} md={12}>
                    <Grid sx={{flexGrow: 1}} container>
                        <Typography sx={{m: 2}} variant="inherit" gutterBottom>
                            Adresele mele de livrare </Typography>
                        <Box sx={{mt: 1, ml: 5}}>
                            <Button variant="outlined"><AddIcon/></Button>
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
                                    <Box sx={{mb: 2}}>
                                        <Button variant="text"
                                                style={{color: "blue"}}
                                                onClick={() => {
                                                    deleteLocation(row.uid)
                                                }}
                                        >sterge</Button>
                                    </Box>

                                </Grid>
                            </Grid>
                        </Card>
                    ))}

                </Grid>
            </Grid>

        </Card>
    )
}