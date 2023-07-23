import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useCourses = () => {
    const {loading} = useContext(AuthContext);
    const {data: courses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['courses'],
        enabled: !loading && !!localStorage.getItem("access-token"),
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-dusky.vercel.app/class');
            return res.json();
        }
    })

    return [courses, loadings, refetch]
};

export default useCourses;