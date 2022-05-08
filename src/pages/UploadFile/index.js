import React from "react";
import {saveProducts} from "../../FireBase/actions";

export default function UploadFile() {
    const onChange = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            JSON.parse(e.target.result).forEach( async (row)  =>{
                const saveData = saveProducts(row);
                console.log(saveData);
            })
        };

    };
    return (
        <div>
            <input type="file" onChange={onChange} />
        </div>
    );
}