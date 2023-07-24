import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCourses = () => {
    const {loading} = useContext(AuthContext)
    const {data: courses = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['courses'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/courses');
            return res.json();
        }
    })

    return [courses, loadings, refetch]
};

export default useCourses;