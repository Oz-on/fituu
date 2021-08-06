import PanelTemplate from "../../../components/templates/PanelTemplate";
import EditExercise from "../../../components/views/Library/EditExercise";
import { getSession } from "next-auth/client";

const ExercisesPage = ({ exercise }) => {
  return (
    <PanelTemplate>
      <EditExercise exercise={exercise} />
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
      exercise: {
        id: 1,
        exerciseName: "PUSH UP",
        mediaURL: "www.google.com",
        description:
          "This is a preety cool exercise for your chest. Do this!!!",
        patterns: [{ value: 1, label: "PUSH" }],
        types: [{ value: 1, label: "GYMNASTIC" }],
        primaryMuscles: [{ value: 1, label: "TRICEPS" }],
      },
    },
  };
}
