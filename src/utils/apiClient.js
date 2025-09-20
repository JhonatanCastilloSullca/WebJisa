export class HttpError extends Error {
  constructor(message, { status, statusText, url, payload, headers }) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.statusText = statusText;
    this.url = url;
    this.payload = payload;
    this.headers = headers;
  }
}

export async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);

  // Intenta parsear payload: JSON o texto (evita 204)
  const ct = res.headers.get("content-type") || "";
  let payload = null;
  if (res.status !== 204) {
    if (ct.includes("application/json")) {
      try { payload = await res.json(); } catch (_) { payload = null; }
    } else {
      try { payload = await res.text(); } catch (_) { payload = null; }
    }
  }

  if (!res.ok) {
    const msg =
      (payload && typeof payload === "object" && payload.message) ||
      (typeof payload === "string" && payload) ||
      `${res.status} ${res.statusText}`;

    throw new HttpError(msg, {
      status: res.status,
      statusText: res.statusText,
      url,
      payload,
      headers: Object.fromEntries(res.headers.entries()),
    });
  }

  // Si payload fue texto, devuélvelo como { data: texto }
  return typeof payload === "string" ? { data: payload } : payload;
}