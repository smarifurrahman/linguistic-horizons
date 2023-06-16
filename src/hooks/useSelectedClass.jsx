import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = () => {
    const { user, loading: authLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: userInfo = [] } = useQuery({
        queryKey: ['email'],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/${user.email}`)
            return res.data;
        },
    })

    return [userInfo, refetch];
};

export default useSelectedClasses;