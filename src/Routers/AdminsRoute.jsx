import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminsRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoding] = useAdmin();
    const location = useLocation()


    if(loading || isAdminLoding){
        return <progress className='progress w-56'></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
   
};


export default AdminsRoute;