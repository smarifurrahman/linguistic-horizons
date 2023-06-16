import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useAuth()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data;
        },
    })

    return [users, refetch];
};

export default useUsers;