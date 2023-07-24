import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCourses = () => {
    const {loading} = useContext(AuthContext)
    const {data: courses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['courses'],
        queryFn: async() => {
            const res = await fetch('https://college-admission-server-cyan.vercel.app/courses');
            return res.json();
        }
    })

    return [courses, loadings, refetch]
};

export default useCourses;