import { fetcher, fetcherWithToken, Method, request } from "../api";
import useSWR from "swr";
import { useState } from "react";
import { useSession } from "next-auth/client";

const optionsFetcher = async (url?: string) => {
  const bodyParts = await await fetcher(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise/bodyparts/`
  );
  const patterns = await await fetcher(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise/patterns/`
  );
  const types = await fetcher(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise/types/`
  );

  return {
    bodyParts: formatOptions(bodyParts, true),
    patterns: formatOptions(patterns),
    types: formatOptions(types),
  };
};

const formatOptions = (
  options: { id: number; name?: string; title?: string }[],
  isBody?: boolean
) => {
  return options?.map((option) => ({
    value: option.id,
    label: isBody ? option.name : option.title,
  }));
};
export type Exercise = {
  bodyParts?: number[];
  description: string;
  mediaUrl: string;
  name: string;
  patterns?: number[];
  types?: number[];
};

const useExerciseOptions = () => {
  const [loading, setLoading] = useState(false);
  const [session] = useSession();
  const { data, error } = useSWR(["/options"], optionsFetcher);

  const handleSubmitEwercise = async (
    exercise: Exercise,
    method: Method,
    id?: string
  ) => {
    setLoading(true);
    try {
      const res = await request(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise/${
          id ? `${id}/` : ""
        }`,
        method,
        //@ts-ignore
        session.accessToken,
        exercise
      );
      console.log(res);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const handleDeleteExercise = async (id: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise/${id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          "Content-Type": `application/json`,
        },
      }
    );
  };
  return {
    ...data,
    formatOptions,
    handleSubmitEwercise,
    handleDeleteExercise,
    loading,
  };
};

export default useExerciseOptions;
