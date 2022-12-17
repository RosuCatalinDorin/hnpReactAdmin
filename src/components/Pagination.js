import {Pagination} from "@mui/lab";
import {Grid} from "@mui/material";

export default function MyPagination(props) {
    const {totalRows, page, handleChange, totalRowsPerPage} = props;
    const totalPages = Math.ceil(totalRows / totalRowsPerPage);
    return (
        <Grid container sx={{mt: 4}} alignItems='center' direction="column" justifyContent='center'>
            <Grid item>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(event, page) => {

                        handleChange(Math.ceil(totalRowsPerPage * page), page)
                    }}
                />
            </Grid>

        </Grid>

    );
}