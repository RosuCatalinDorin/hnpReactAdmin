import {useAuth} from "../../../../Auth";
import Button from "@mui/material/Button";
import {NavLink as RouterLink} from "react-router-dom";
import * as React from "react";
import {useEffect, useState} from "react";


export const NavBarButtons = (props) => {


    const {button, handleCloseNavMenu} = props;
    const {currentUser} = useAuth();
    const [menuButtons, setMenuButtons] = useState([]);
    const getUserNavButtons = () => {
        if (currentUser.login === false) {
            return button.filter((item) => item.login === false);
        }
        if (currentUser.login === true && currentUser.userDetails.role === 'ROLE_ADMIN') {
            return button
        }
        if (currentUser.login === true && currentUser.userDetails.role === 'ROLE_USER') {
            return button.filter((item) => item.roles.includes(currentUser.userDetails.role));
        }
        return []
    }

    useEffect(() => {
        setMenuButtons(getUserNavButtons())
    }, [currentUser])
    return (
        <>
            {menuButtons.map((item) => (
                <Button
                    component={RouterLink}
                    to={item.path}
                    key={item.title}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'black', display: 'block'}}
                >
                    {item.title}
                </Button>
            ))}
        </>
    );
}