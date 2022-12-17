import {InputAdornment, TextField} from "@mui/material";
import Iconify from "./Iconify";

export default function SearchInput(props) {
    return (<TextField
        placeholder="Cauta ..."
        onKeyUp={(e) => {
            if (e.key === 'Enter') {
                props.onSearch(e.target.value)
            }
        }}
        onChange={(e) => {
            if (e.target.value === '') {
                props.onSearch(null)
            }
        }}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Iconify
                        icon="eva:search-fill"
                        sx={{
                            ml: 1,
                            width: 20,
                            height: 20,
                            color: 'text.disabled'
                        }}
                    />
                </InputAdornment>
            )
        }}
    >
    </TextField>)
}