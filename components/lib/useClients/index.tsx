import { useSession } from "next-auth/client";
import useSWR, { mutate } from "swr";

import { request, fetcherWithToken } from "../api";

export type Client = {
  id: number, 
  firstName: string, 
  lastName: string, 
  profilePhoto: {url: string}
};

const useClients = () => {
  const [session, areDataFetching] = useSession();

  const path = 'clients/';

  // Fetch list of clients
  const { data, error} = useSWR<Array<Client>, any>([path, session.accessToken], fetcherWithToken);

  let deletingErr = false;

  // It removes client from list
  const handleRemoveClient = async (id: string) => {

    // mutate response before delete request, to give user feeling of fast internet
    const filteredUsers = data.filter(user => user.id.toString() === id);
    mutate(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${path}`, filteredUsers, false);

    try {
      const response: Response = await request(
        path,
        "DELETE",
        //@ts-ignore
        session.accessToken,
        {
          client: id,
        }
      );

      if (!response || response.status >= 400) {
        throw new Error('error while removing client');
      }
    } catch (error) {
      deletingErr = true;
    }

    if (!deletingErr) {
      mutate(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${path}`,);
    }

  };

  return {
    clients: data,
    handleRemoveClient: handleRemoveClient,
    clientsLoading: areDataFetching,
    fetchingError: error,
    deletingError: deletingErr,
  }
};

export default useClients;
