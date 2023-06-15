import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useMyClasses = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes`)
            return res.json();
        },
    })

    return [users, refetch];
};

export default useMyClasses;