// Store basic fetches and functions related to api here
export type Method = "PUT" | "POST" | "PATCH";
export const fetcher = (url: string, options?: Object) =>
  fetch(url, options).then((res) => {
    return res.json();
  });

export const fetcherWithToken = (url: string, token: string, id?: string) =>
  fetch(`${url}${id ? "/" + id : ""}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const request = (
  url: string,
  method: Method,
  token: string,
  data: any
) =>
  fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
