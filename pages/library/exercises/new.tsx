import PanelTemplate from "../../../components/templates/PanelTemplate";
import NewExercise from "../../../components/views/Library/NewExercise";
import { getSession } from "next-auth/client";

const ExercisesPage = ({}) => {
  return (
    <PanelTemplate>
      <NewExercise />
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

  return {
    props: {
      session,
    },
  };
}
