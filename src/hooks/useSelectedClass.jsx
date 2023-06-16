import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useSelectedClasses = () => {
    const { user } = useAuth();

    const { refetch, data: userInfo = [] } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user.email}`)
            return res.json();
        },
    })

    return [userInfo, refetch];
};

export default useSelectedClasses;