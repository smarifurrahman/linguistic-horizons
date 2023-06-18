import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading: authLoading } = useAuth();

    const { refetch, isLoading: loading, data: users = [] } = useQuery({
        queryKey: ['classes'],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/?email=${user.email}`)
            return res.data;
        },
    })

    return [users, refetch, loading];
};

export default useMyClasses;