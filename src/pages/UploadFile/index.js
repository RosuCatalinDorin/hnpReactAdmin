import React from "react";
import readXlsxFile from 'read-excel-file'
import {saveProductPRice} from "../../FireBase/actions";

export default function UploadFile() {


    const onChange = (e) => {
        e.preventDefault();
        readXlsxFile(e.target.files[0]).then(async (rows) => {
            const data = await saveProductPRice(rows)
            console.log(data);

        })

    };
    return (
        <div>
            <input type="file" onChange={onChange}/>
        </div>
    );
}