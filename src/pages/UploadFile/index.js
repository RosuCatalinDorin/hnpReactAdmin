import React from "react";
import {saveProduct} from "../../apiCalls/api/Products";
import Notiflix from "notiflix";

export default function UploadFile() {


    const onChange = (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            JSON.parse(e.target.result).forEach(async (row) => {
                const saveData = saveProduct(row);
                //todo de implementat aplearea api-ului si salvarea in elk
                console.log(saveData);
            })
            Notiflix.Loading.remove();
        };

    };
    return (
        <div>
            <input type="file" onChange={onChange}/>
        </div>
    );
}