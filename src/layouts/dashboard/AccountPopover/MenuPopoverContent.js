import {useAuth} from "../../../Auth";
import MenuPopover from "../../../components/MenuPopover";
import {Box, Button, Divider, MenuItem, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Iconify from "../../../components/Iconify";

const MENU_OPTIONS = [
    {
        label: 'Acasa',
        icon: 'eva:home-fill',
        linkTo: '/'
    },
    
];
export const MenuPopoverContent = (props) => {
    const {handleClose, anchorRef, open} = props;
    const {logout, currentUser} = useAuth()

    function getDisplayName() {
        if (currentUser.login === false) {
            return "Intra in contul tau HNP si ai control complet asupra ofertelor!";
        }
        return currentUser.userDetails && currentUser.userDetails.lastName + " " + currentUser.userDetails && currentUser.userDetails.firstName;
    }

    const displayName = getDisplayName();
    return (
        <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            sx={{width: 220}}
        >
            <Box sx={{my: 1.5, px: 2.5}}>
                <Typography variant="subtitle1" noWrap>
                    {displayName}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                    {currentUser.email}
                </Typography>

            </Box>
            <Divider sx={{my: 1}}/>
            {MENU_OPTIONS.map((option) => (
                <MenuItem
                    key={option.label}
                    to={option.linkTo}
                    component={RouterLink}
                    onClick={handleClose}
                    sx={{typography: 'body2', py: 1, px: 2.5}}
                >
                    <Iconify
                        icon={option.icon}
                        sx={{
                            mr: 2,
                            width: 24,
                            height: 24
                        }}
                    />

                    {option.label}
                </MenuItem>
            ))}
            <Box sx={{p: 2, pt: 1.5}}>
                <Button onClick={() => {
                    logout();
                    handleClose();
                }} fullWidth color="inherit" variant="outlined">
                    Deconectare
                </Button>
            </Box>
        </MenuPopover>
    )
}