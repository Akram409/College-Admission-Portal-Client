import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyCollege = () => {
    const {user,loading} = useContext(AuthContext)
    const {data: mycollege = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['mycollege'],
        enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`https://college-admission-server-cyan.vercel.app/mycollege/${user?.email}`);
            return res.json();
        }
    })
    
    return [mycollege, loadings, refetch]
};

export default useMyCollege;