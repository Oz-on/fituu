import React, {useReducer, useContext, createContext} from "react";
import useSWR, {mutate} from "swr";
import { useSession } from "next-auth/client"
;
import { fetcherWithToken, API_BASE_URL } from "../api";
import {getTagsArr, mapUserType} from '../';


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
  profilePhotoUrl: string;
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
  updateUserData: (currentData: UserDataProps, formData: UserDataEditionInputs, successCallback: Function) => void;
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
  profilePhotoUrl: '',
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
    isError: error,
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

  console.log('creating provider');

  // It updates user data
  const updateUserData = async (currentData: UserDataProps, formData: UserDataEditionInputs, successCallback: Function): Promise<void> => {
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
  
    // update data
    mutate(`${API_BASE_URL}/user`, {...currentData, ...dataToSend}, false);
  
    await fetch(`${API_BASE_URL}/user/update/`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
  
    mutate(`${API_BASE_URL}/user`);
    successCallback();
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
