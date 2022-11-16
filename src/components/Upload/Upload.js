import React from "react";
import './css/index.css'
import {Stack} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
export default function MyUpload(props) {

    const {onChange} = props;
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    return (
        <Stack>

            <IconButton color="primary" aria-label="upload picture" component="label" placeholder="Incarca o fotografie">
                <input hidden accept="image/*" type="file" onChange={(data) => {
                    toBase64(data.target.files[0]).then((data) => {
                        onChange(data)
                    })
                }}/>
                <PhotoCamera/>
            </IconButton>
            {props.error === true ?
                <p className="css-16d5wub-MuiFormHelperText-root"
                   style={{color: "red"}}>
                    {props.errorMessage}
                </p> : ""}
        </Stack>
    );
}