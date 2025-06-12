import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchData = async ({ queryKey }) => {
    const { endpoint, method = 'POST', headers = {}, body = null } = queryKey[1];

    const url = `${API_URL}/${endpoint}`;

    const finalBody = body
        ? { ...body, idioma_id: 1 }
        : { idioma_id: 1 };

    const requestOptions = {
        method,
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
            ...headers,
        },
        body: finalBody ? JSON.stringify(finalBody) : null,
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
};

export const useApi = ({ endpoint, method = 'POST', headers = {}, body = null }) => {
    return useQuery({
        queryKey: ['api', { endpoint, method, headers, body }],
        queryFn: fetchData,
        staleTime: 1000 * 60 * 5,
    });
};
