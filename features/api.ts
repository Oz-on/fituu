type Headers = {
  Authorization: string,
  'Content-Type': string,
};


class Api {
  static API_URL = '127.0.0.1:8000';
  static createHeaders(token: string): Headers {
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }

  static async fetchUser(token: string): Promise<Object> {

    const headers = Api.createHeaders(token);

    console.log('headers: ', headers);
    return fetch(`http://${Api.API_URL}/api/user/`, {
      method: 'GET',
      headers: headers,
    }).then((response) => response.json());
  }
}

export default Api;