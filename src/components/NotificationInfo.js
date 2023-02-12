import {Stack} from "@mui/material";
import {Alert} from "@mui/lab";
import {useAuth} from "../Auth";

export default function NotificationInfo() {
    const {currentUser} = useAuth();

    if (currentUser.login === false) {
        return "";
    }

    const getMessage = () => {
        if (currentUser.userDetails.status === false) {
            return "Contul tau este inactiv, pentru a putea plasa o comanda trebuie sa contactezi un reprezentant HNP pentru identificare.";
        }
    }

    return (<>
        {currentUser.userDetails.status === true ? "" :
            <Stack sx={{width: '100%', mb: 1}}>
                <Alert severity="info">{getMessage()}</Alert>
            </Stack>
        }
    </>)
}