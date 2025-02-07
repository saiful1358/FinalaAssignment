import { Navigate } from "react-router-dom";
 
import useAuthStore from "../../../store/AuthStore";

const AuthGuard = ({ children }) => {
    const { isAuthenticated } = useAuthStore(); // Get auth status from global state

    if (!isAuthenticated) {
        return <Navigate to="/" replace />; // Redirect to login if not authenticated
    }

    return children;
};

export default AuthGuard;
