import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useSelectedClasses = () => {
    const { user } = useContext(AuthContext);

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