import {useRef, useState} from 'react';
// material
import {alpha} from '@mui/material/styles';
import {Avatar, IconButton} from '@mui/material';
// components
//
import account from '../../../_mocks_/account';
import {useAuth} from "../../../Auth";
import {MenuPopoverContent} from "./MenuPopoverContent";

// ----------------------------------------------------------------------


export default function AccountPopover() {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const {currentUser} = useAuth()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                        }
                    })
                }}
            >
                <Avatar src={account.photoURL} alt="photoURL"/>

            </IconButton>

            {currentUser.login === true ?
                <MenuPopoverContent
                    anchorRef={anchorRef}
                    handleClose={handleClose}
                    open={open}
                /> :

                ""}
        </>
    );


}
