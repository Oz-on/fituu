import PanelTemplate from "../../../components/templates/PanelTemplate";
import Exercises from "../../../components/views/Library/Exercises";
import { getSession } from "next-auth/client";
import { fetcherWithToken } from "../../../components/lib/api";

const ExercisesPage = ({ req, exercises, session }) => {
  return (
    <PanelTemplate session={session}>
      <Exercises exercises={exercises} />
    </PanelTemplate>
  );
};

export default ExercisesPage;

export async function getServerSideProps(context) {
  const { res } = context;
  const session = await getSession(context);

  if (!session) {
    res.writehead(302, {
      Location: "/",
    });

    return res.end();
  }

  const exercises = await fetcherWithToken(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/exercise`,
    //@ts-ignore
    session.accessToken
  );

  return {
    props: {
      session,
      exercises,
    },
  };
}
