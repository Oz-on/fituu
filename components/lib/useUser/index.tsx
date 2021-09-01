import {useSession} from "next-auth/client";
import { useRouter } from "next/router";
import useSWR, { mutate} from "swr";
import { getTagsArr, mapUserType } from "../../../lib";
import { fetcherWithToken } from "../api";

export type TagProps = {
  id: number;
  title: string;
};

export type ProfilePhoto = {
  url: string
  expiresIn: string;
} | null;

export type TrainerPreview = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profilePhoto: ProfilePhoto;
};

export type UserDataProps = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profilePhoto: ProfilePhoto;
  city: string | null;
  tags: Array<TagProps>;
  description: string;
  certificates: string;
  type: string;
  verified: boolean;
  birthDate: string;
  weight: number;
  height: number;
  address: string;
  postalCode: string;
  trainers: Array<TrainerPreview>;
};

export type RequestPatchUserData = {
  firstName?: string;
  lastName?: string;
  city?: string;
  tags?: Array<number>;
  profilePhoto?: File;
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

const useUser = (id?: number) => {
  const [session, areSessionFetching] = useSession();
  const router = useRouter();

  const getUserPath = "user/";
  
  // Fetch data about user
  const { data, error } = useSWR<UserDataProps, any>([getUserPath, session.accessToken, id], fetcherWithToken);
  
  const updateUserData = async (currentData: UserDataProps, formData: UserDataEditionInputs, profileImageFile: File | null): Promise<void> => {
    const updateUserPath = "user/update/";
    
    const {fullName, type, description, city, ...tags} = formData;
    const [firstName, lastName] = formData.fullName.split(' ');
  
    // Format data to appropriate
    const dataMutation: RequestPatchUserData = {
      firstName: firstName,
      lastName: lastName,
      city: city,
      description: description,
      type: mapUserType(type),
      tags: getTagsArr(tags),
    }

    const data = new FormData();

    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('description', description);
    data.append('city', city);
    data.append('type', mapUserType(type).toString());
    getTagsArr(tags).forEach(tag => {
      data.append('tags', tag.toString());
    });

    if (profileImageFile) {
      data.append('profilePhoto', profileImageFile, profileImageFile.name);
    }
  
    // update data
    mutate(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${getUserPath}`, {...currentData, ...dataMutation}, false);
    
    // Send PATCH request
    let response: Response;
    try {
      response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/${updateUserPath}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${session.accessToken}`,
        },
        body: data,
      })
    } catch (error) {
      console.error('Error occured while uploading user data: ', error);
      return;
    }

    if (response && response.status < 400) {
      mutate(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user`);
      router.replace('/my-data');
    }
  }

  return {
    user: {
      data: data,
      error: error,
      loading: areSessionFetching,
    },
    updateUserData: updateUserData,
  }
};

export default useUser;