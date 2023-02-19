import {Stack} from "@mui/material";
import {Alert} from "@mui/lab";
import {useAuth} from "../Auth";

export default function NotificationInfo(props) {

    const {showDefaultMessage = false} = props;

    const {currentUser} = useAuth();

    if (!showDefaultMessage) {
        return "";
    }
    if (currentUser.login && currentUser.userDetails.status) {
        return "";
    }

    const getMessage = () => {
        if (currentUser.login === false) {
            return "Pentru a vedea pretul prduselor trebuie sa te autentifici cu contul tau de partener.";
        }
        if (currentUser.userDetails.status === false) {
            return "Contul tau este inactiv, pentru a putea plasa o comanda trebuie sa contactezi un reprezentant HNP pentru identificare.";
        }
    }

    return (<>
        <Stack sx={{width: '100%', mb: 1}}>
            <Alert severity="warning">{getMessage()}</Alert>
        </Stack>

    </>)
}