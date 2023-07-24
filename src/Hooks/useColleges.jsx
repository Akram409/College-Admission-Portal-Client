import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useColleges = () => {
    const {loading} = useContext(AuthContext)
    const {data: colleges = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['colleges'],
        // enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch('https://college-admission-server-cyan.vercel.app/colleges');
            return res.json();
        }
    })

    return [colleges, loadings, refetch]
};

export default useColleges;