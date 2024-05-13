import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoding} = useQuery({
      queryKey: [user?.email, "isAdmin"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data?.admin;
      },
    });
    return[isAdmin, isAdminLoding]
};

export default useAdmin;