import { useMutation } from '@tanstack/react-query';

const API_URL   = import.meta.env.VITE_API_URL;    // e.g. https://sistema.jisaadventure.com/api
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export function useApiMutation() {
  return useMutation({
    mutationFn: async ({ endpoint, body, method = 'POST', headers = {}, absolute = false, baseUrl }) => {
      const base = absolute ? '' : (baseUrl ?? API_URL);
      const url  = absolute ? endpoint : `${base}/${endpoint}`;

      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      let json = {};
      try { json = await res.json(); } catch(e) {}
      if (!res.ok) {
        const msg = (json && json.message) ? json.message : `${res.status} ${res.statusText}`;
        throw new Error(msg);
      }
      return json;
    },
    retry: false,
  });
}
