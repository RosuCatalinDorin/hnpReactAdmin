import {getDocumentProperty} from "../FireBase/actions";
import {useState} from "react";
import {useAuth} from "../Auth";

export default function useUserDetails()
{
    const {currentUser} = useAuth();
    const [userDetails, setDetails] = useState(null);
    const setUserDetails = () =>
    {
        getDocumentProperty("users", 'userId', currentUser.uid).then((data) =>
        {
            setDetails(data);
        });
    };

    return [userDetails, setUserDetails];
}