import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// material
import {styled} from '@mui/material/styles';
// ----------------------------------------------------------------------
import {useAuth} from "../../Auth";
import useUserDetails from "../../hooks/useUserDetails";
import UserNotActive from "../../pages/UserNotActive";
import NavBar from "./NavBar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const MainStyle = styled('div')(({theme}) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout(props) {

    const Main = (props) => {
        return (<RootStyle>
            <NavBar/>
            <MainStyle>
                {props.children}
            </MainStyle>
        </RootStyle>)
    }
    if (props.auth === false) {
        return (<Main>
            {props.children}
        </Main>)``
    }
    const {currentUser, setCurrentUser} = useAuth();
    const [userDetails, setUserDetails] = useUserDetails();
    const navigate = useNavigate();
    useEffect(() => {
        if (userDetails !== null) {
            let user = currentUser;
            user.userDetails = userDetails;
            setCurrentUser(user);
        }

    }, [userDetails]);

    useEffect(() => {
        setUserDetails();
    }, []);
    useEffect(() => {
        setUserDetails();
    }, [currentUser]);

    if (currentUser && !currentUser.hasOwnProperty('userDetails')) {
        return (<></>);
    }
    return (
        <Main>
            {props.admin === true && currentUser.userDetails.role !== "ADMIN" ? navigate('/404') : ""}

            {currentUser.userDetails.status === true ? props.children : <UserNotActive
                currentUser={currentUser}
            />}
        </Main>)
}