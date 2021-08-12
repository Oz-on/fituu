import PanelTemplate from "../../../components/templates/PanelTemplate";
import EditExercise from "../../../components/views/Library/EditExercise";
import { getSession } from "next-auth/client";
import { fetcher, fetcherWithToken } from "../../../components/lib/api";

const ExercisesPage = ({ exercise }) => {
  return (
    <PanelTemplate>
      <EditExercise exercise={exercise} />
    </PanelTemplate>
  );
};

export default ExercisesPage;

export async function getServerSideProps(context) {
  const { res, query } = context;

  const session = await getSession(context);

  if (!session) {
    res.writehead(302, {
      Location: "/",
    });

    return res.end();
  }

  const exercise = await fetcherWithToken(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise/${query.id}`,
    //@ts-ignore
    session.accessToken
  );

  return {
    props: {
      session,
      exercise,
    },
  };
}
