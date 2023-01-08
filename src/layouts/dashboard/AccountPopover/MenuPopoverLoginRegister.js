import MenuPopover from "../../../components/MenuPopover";
import {Avatar, Box, Button, Divider, Grid, Link, Typography} from "@mui/material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import account from "../../../_mocks_/account";


export const MenuPopoverLoginRegister = (props) => {
    const {handleClose, anchorRef, open} = props;
    const navigate = useNavigate();
    return (
        <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            sx={{width: 300}}
        >
            <Box sx={{my: 1.5, px: 2.5}}>
                <Grid>
                    <Grid item xs={12} display="flex">
                        <Avatar src={account.photoURL} alt="photoURL"/>
                        <Typography sx={{mt: 1.5, ml: 1}} underline="none" variant="caption" noWrap> Nu ai un cont
                            HNP? &nbsp; </Typography>
                        <Link sx={{mt: 1.5}} underline="none" variant="caption" component={RouterLink}
                              to="/register">
                            Creaza unul aici!
                        </Link>
                    </Grid>
                </Grid>


            </Box>
            <Divider sx={{my: 1}}/>
            <Box sx={{p: 2, pt: 1.5}}>
                <Button onClick={() => {
                    navigate('/login');
                }} fullWidth color="primary" variant="outlined">
                    Login
                </Button>
            </Box>
        </MenuPopover>);
}