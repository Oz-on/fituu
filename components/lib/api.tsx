// Store basic fetches and functions related to api here
export type Method = "PUT" | "POST" | "PATCH" | "DELETE";
export const fetcher = (url: string, options?: Object) =>
  fetch(url, options).then((res) => {
    return res.json();
  });

export const fetcherWithToken = (path: string, token: string, id?: string) =>
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${path}${id ? "/" + id : ""}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());


// Request function, handles all requests different than GET
export const request = (
  path: string,
  method: Method,
  token: string,
  data?: any
) =>
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
