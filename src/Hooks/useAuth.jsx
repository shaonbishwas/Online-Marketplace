import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";


const useAuth = () => {
    const auths = useContext(AuthContext)

    return auths;
};

export default useAuth;