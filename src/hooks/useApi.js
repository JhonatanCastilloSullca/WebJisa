import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "../utils/apiClient";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchData = async ({ queryKey }) => {
  const { endpoint, method = "POST", headers = {}, body = null, idiomaId } = queryKey[1];

  const url = `${API_URL}/${endpoint}`;
  const finalUrl = idiomaId ? `${url}?idioma_id=${idiomaId}` : url;

  const requestOptions = {
    method,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  // 👉 ahora lanza HttpError con .status, .payload, etc.
  return await fetchJson(finalUrl, requestOptions);
};

export const useApi = ({ endpoint, method = "POST", headers = {}, body = null, idiomaId }) => {
  return useQuery({
    queryKey: ["api", { endpoint, method, headers, body, idiomaId }],
    queryFn: fetchData,
    // Reintenta solo en errores 5xx (opcional)
    retry: (failureCount, error) => {
      const status = error?.status ?? 0;
      return status >= 500 && failureCount < 2;
    },
  });
};