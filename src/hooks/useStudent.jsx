import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useStudent = () => {
    const { user, loading: authLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/check-student/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;