// Store basic fetches and functions related to api here

export const API_BASE_URL = "https://fituu-backend-t84ol.ondigitalocean.app/api";

export const fetcher = (url: string, options: Object) => fetch(url, options).then(res => {
  return res.json();
});

export const fetcherWithToken = (url: string, token: string, id: string) => fetch(
  `${url}${id ? '/' + id : ""}`, 
  {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
).then(res => res.json());