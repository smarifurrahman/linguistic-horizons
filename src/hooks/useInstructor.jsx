import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
    const { user, loading: authLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/check-instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;