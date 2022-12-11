
import React from "react";
import './css/index.css'
export default function MyUpload (props) {

    const {onChange} = props;
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    return (
        <>
            <input className='custom-file-upload' type="file" name="file" onChange={(data) =>{
                toBase64(data.target.files[0]).then((data)=>{
                        onChange(data)
                })
            }} />
            {props.error === true ?
                <p className="css-16d5wub-MuiFormHelperText-root"
                   style={{color: "red"}}>
                    {props.errorMessage}
                </p> : ""}
        </>
    );
}