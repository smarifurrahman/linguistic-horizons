import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading: authLoading } = useAuth();

    const { refetch, isLoading: loading, data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data;
        },
    })

    return [users, refetch, loading];
};

export default useUsers;