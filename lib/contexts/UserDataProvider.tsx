import React, {useReducer, useContext, createContext} from "react";
import useSWR, {mutate} from "swr";
import { useSession } from "next-auth/client"
;
import { fetcherWithToken, API_BASE_URL } from "../api";
import {getTagsArr, mapUserType} from '../';
import { useRouter } from "next/dist/client/router";


export type TagProps = {
  id: string;
  title: string;
}
export type UserDataProps = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  city: string | null;
  region: string | null;
  tags: Array<TagProps>;
  profilePhoto: {
    url: string
  };
  description: string;
  certificates: string;
  type: string;
}
export type RequestPatchUserData = {
  firstName?: string;
  lastName?: string;
  city?: number;
  tags?: Array<number>;
  profilePhoto?: any;
  description?: string;
  certificates?: string;
  type?: number;
  postalCode?: string;
  address?: string;
  birthDate?: string;
  weight?: number;
  height?: number;
}
export type UserDataEditionInputs = {
  fullName: string,
  city: string,
  type: string,
  description: string,
  '1': boolean,
  '2': boolean,
  '3': boolean,
  '4': boolean,
  '5': boolean,
  '6': boolean,
  '7': boolean,
  '8': boolean,
};

type ActionProps = {
  type: string;
  payload?: any;
}
type ProviderProps = {
  accessToken: string | undefined;
  children: React.ReactNode,
};
type Dispatch = (action: ActionProps) => void;

type DispatchContextProps = {
  dispatch: Dispatch;
  updateUserData: (currentData: UserDataProps, formData: UserDataEditionInputs, profileImageFile: File) => void;
}

const ACTIONS = {
  SET_USER: 'SET_USER',
};

const defaultState: UserDataProps = {
  id: 0,
  email: '',
  firstName: '',
  lastName: '',
  city: null,
  region: null,
  tags: [],
  profilePhoto: {
    url: '',
  },
  description: '',
  certificates: '',
  type: '',
};

const UserDataStateContext = createContext(defaultState);
const UserDataDispatchContext = createContext<DispatchContextProps>(undefined);

export const useUserDataState = (): UserDataProps => {
  const context = useContext(UserDataStateContext);
  if (context === undefined) {
    throw new Error('useUserDataState must be used within a UserDataProvider');
  }

  return context;
}

export const useUserDataDispatch = (): DispatchContextProps => {
  const context = useContext(UserDataDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDataState must be used within a UserDataProvider');
  }

  return context;
}

// Hooks for fetching data

// It returns user data fetched from api
export const useUser = (id?: number) => {
  const [session, loading] = useSession();
  if (loading) {
    return;
  }

  const accessToken = session.accessToken;
  const {data, error} = useSWR<UserDataProps, any>([`${API_BASE_URL}/user`, accessToken, id], fetcherWithToken);

  return {
    user: data,
    isLoading: !error && !data,
    error: error,
  };
}

const userDataReducer = (state: UserDataProps, action: ActionProps) => {
  switch(action.type) {
    case ACTIONS.SET_USER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

const UserDataProvider = ({children, accessToken}: ProviderProps) => {
  const [state, dispatch] = useReducer(userDataReducer, defaultState);

  const router = useRouter();

  // It updates user data
  const updateUserData = async (currentData: UserDataProps, formData: UserDataEditionInputs, profileImageFile: File | null): Promise<void> => {

    const {fullName, type, description, city, ...tags} = formData;
    const [firstName, lastName] = formData.fullName.split(' ');
  
    // Format data to appropriate
    const dataToSend: RequestPatchUserData = {
      firstName: firstName,
      lastName: lastName,
      description: description,
      type: mapUserType(type),
      tags: getTagsArr(tags),
    }

    const data = new FormData();

    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('description', description);
    data.append('type', mapUserType(type).toString());
    getTagsArr(tags).forEach(tag => {
      data.append('tags', tag.toString());
    });

    if (profileImageFile) {
      data.append('profilePhoto', profileImageFile, profileImageFile.name);
    }
  
    // update data
    mutate(`${API_BASE_URL}/user`, {...currentData, ...dataToSend}, false);
    
    let response: Response;
    try {
      response = await fetch(`${API_BASE_URL}/user/update/`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
        body: data,
      })
    } catch (error) {
      console.error('Error occured while uploading user data: ', error);
      return;
    }

    if (response && response.status < 400) {
      mutate(`${API_BASE_URL}/user`);
      router.replace('/dashboard/my-data');
    }
  }

  return (
    <UserDataDispatchContext.Provider 
      value={{
        dispatch: dispatch, 
        updateUserData: updateUserData
      }}>
      <UserDataStateContext.Provider value={state}>
        {children}
      </UserDataStateContext.Provider>
    </UserDataDispatchContext.Provider>
  );
}

export default UserDataProvider;
