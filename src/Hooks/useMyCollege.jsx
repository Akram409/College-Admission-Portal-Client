import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCourses = () => {
    const {user,loading} = useContext(AuthContext)
    const {data: mycolleges = [], isLoading: loadings, refetch} = useQuery({
        queryKey: ['mycolleges'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/mycollege/${user?.email}`);
            return res.json();
        }
    })

    return [mycolleges, loadings, refetch]
};

export default useCourses;