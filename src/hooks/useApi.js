import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchData = async ({ queryKey }) => {
    const { endpoint, method = 'POST', headers = {}, body = null, idiomaId } = queryKey[1];

    const url = `${API_URL}/${endpoint}`;
<<<<<<< HEAD
    const finalUrl =
        idiomaId ? `${url}?idioma_id=${idiomaId}` : url;


=======

    const finalBody = body
        ? { ...body, idioma_id: 1 }
        : { idioma_id: 1 };
>>>>>>> 22bd3ae8e23818aa2358e958ddfe725aa56b99bc

    const requestOptions = {
        method,
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
            ...headers,
        },
        body: finalBody ? JSON.stringify(finalBody) : null,
    };

    const response = await fetch(finalUrl, requestOptions);
    const json = await response.json();

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return json;
};

export const useApi = ({ endpoint, method = 'POST', headers = {}, body = null, idiomaId }) => {
    return useQuery({
        queryKey: ['api', { endpoint, method, headers, body, idiomaId }],
        queryFn: fetchData,
    });
};
