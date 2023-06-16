import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';

const useEnrolledClasses = () => {
    const { user } = useAuth();

    const { refetch, isLoading: loading, data: classes = [] } = useQuery({
        queryKey: ['email'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enrolled-classes/?email=${user.email}`)
            return res.json();
        },
    })

    return [classes, loading, refetch];
};

export default useEnrolledClasses;