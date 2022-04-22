import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function MyAutoComplete(props)
{
    const onChangeAutocomplete = (value, fieldName) =>
    {
        if(value === null || typeof value === 'undefined') {
            props.formik.setFieldValue(fieldName, '');
            return;
        }
        props.formik.setFieldValue(fieldName, value);
    };
    return (
        <Autocomplete
            fullWidth={false}
            disablePortal
            options={props.options}
            onChange={(event, value) =>
            {
                onChangeAutocomplete(value, props.name);
            }}
            renderInput={(params) => <TextField
                variant="filled"
                {...params} {...props}/>}
            {...props}
        />
    );
}
