import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        },
    })

    return [users, refetch];
};

export default useUsers;