import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useEnrolledClasses = () => {
    const { user } = useContext(AuthContext);

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