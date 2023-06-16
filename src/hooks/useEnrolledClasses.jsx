import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useEnrolledClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading: authLoading } = useAuth();

    const { refetch, isLoading: loading, data: classes = [] } = useQuery({
        queryKey: ['email'],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled-classes/?email=${user.email}`)
            return res.data;
        },
    })

    return [classes, loading, refetch];
};

export default useEnrolledClasses;