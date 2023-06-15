import { useQuery } from '@tanstack/react-query'

const useClasses = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes')
            return res.json();
        },
    })

    return [users, refetch];
};

export default useClasses;