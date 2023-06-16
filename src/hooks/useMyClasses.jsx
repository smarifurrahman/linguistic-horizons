import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useMyClasses = () => {
    const { user } = useAuth();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes/?email=${user.email}`)
            return res.json();
        },
    })

    return [users, refetch];
};

export default useMyClasses;