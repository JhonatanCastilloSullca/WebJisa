import { useMutation } from "@tanstack/react-query";
import { fetchJson } from "../utils/apiClient";

const API_URL = import.meta.env.VITE_API_URL;    // p.ej. https://sistema.jisaadventure.com/api
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export function useApiMutation() {
  return useMutation({
    mutationFn: async ({ endpoint, body, method = "POST", headers = {}, absolute = false, baseUrl }) => {
      const base = absolute ? "" : (baseUrl ?? API_URL);
      const url = absolute ? endpoint : `${base}/${endpoint}`;

      const opts = {
        method,
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      };

      // 👉 si falla, lanza HttpError con .status
      return await fetchJson(url, opts);
    },
    retry: (failureCount, error) => {
      const status = error?.status ?? 0;
      return status >= 500 && failureCount < 1; // sin reintentos en 4xx
    },
  });
}