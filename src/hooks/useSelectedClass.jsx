import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClasses = () => {
    const { user, loading: authLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, isLoading: loading, data: userInfo = [] } = useQuery({
        queryKey: ['email', user?.email],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure(`/users/${user?.email}`)
            return res.data;
        },
    })

    return [userInfo, refetch, loading];
};

export default useSelectedClasses;