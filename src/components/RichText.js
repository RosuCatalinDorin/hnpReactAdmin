import ReactQuill from "react-quill";
import React from "react";
import 'react-quill/dist/quill.snow.css'
import {Grid} from "@mui/material";

export default function RichText(props) {
    return (
        <Grid container>
            <Grid>
                <ReactQuill
                    modules={module}
                    ormats={formats}
                    {...props}
                />
            </Grid>
            <Grid>
                {props.error === true ?
                    <p className="css-16d5wub-MuiFormHelperText-root"
                       style={{color: "red", paddingLeft: 13}}>
                        {props.errorMessage}
                    </p> : ""}
            </Grid>
        </Grid>

    )
}

const module = {
    toolbar: [
        [{'header': '1'}, {'header': '2'}, {'font': []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]