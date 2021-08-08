// Store basic fetches and functions related to api here

import { ERROR_CODES } from ".";

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
).then((res: Response) => {
  if (res.status === 200) {
    return res.json();
  } else {
    switch(res.status) {
      case 403:
        throw new Error(ERROR_CODES.authError);
    }
  }
});