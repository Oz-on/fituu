import PanelTemplate from "../../../components/templates/PanelTemplate";
import Exercises from "../../../components/views/Library/Exercises";
import { getSession } from "next-auth/client";

const ExercisesPage = ({ exercises }) => {
  return (
    <PanelTemplate>
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

  return {
    props: {
      session,
      exercises: [
        {
          id: 1,
          exerciseName: "PUSH UP",
          patterns: [{ id: 1, patternName: "PUSH" }],
          types: [{ id: 1, name: "GYMNASTIC" }],
          primaryMuscles: [{ id: 1, name: "TRICEPS" }],
        },
        {
          id: 2,
          exerciseName: "PULL UP",
          patterns: [{ id: 2, patternName: "PULL" }],
          types: [
            { id: 1, name: "GYMNASTIC" },
            { id: 2, name: "STRENGTH" },
          ],
          primaryMuscles: [{ id: 2, name: "BICEPS" }],
        },
      ],
    },
  };
}
