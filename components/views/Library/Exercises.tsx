import Button from "../../Button";
import Link from "next/link";
import Chip from "../../atoms/Chip";
import { TitleRow, Paper, Table } from "./shared";
const Exercises = ({ exercises }) => {
  return (
    <>
      <TitleRow>
        <h2>Exercises</h2>
        <Link href="/library/exercises/new" passHref>
          <Button primary>Add exercise</Button>
        </Link>
      </TitleRow>
      <Paper>
        <Table>
          <div className="flex-table header">
            <div className="flex-row first">Nazwa ćwiczenia</div>
            <div className="flex-row">Patterny</div>
            <div className="flex-row">Typ ćwiczenia</div>
            <div className="flex-row">Główne partie mięśniowe</div>
          </div>
          {exercises &&
            exercises.map((exercise) => (
              <Link href={`/library/exercises/${exercise.id}`} passHref>
                <div className="flex-table row">
                  <div className="flex-row first">{exercise.exerciseName}</div>
                  <div className="flex-row">
                    <div className="rowspan">
                      {exercise.patterns?.map((pattern) => (
                        <Chip primary margin={"4px"}>
                          {pattern.patternName}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <div className="flex-row">
                    <div className="rowspan">
                      {" "}
                      {exercise.types?.map((type) => (
                        <Chip primary margin={"4px"}>
                          {type.name}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <div className="flex-row">
                    <div className="rowspan">
                      {" "}
                      {exercise.primaryMuscles?.map((muscle) => (
                        <Chip primary margin={"4px"}>
                          {muscle.name}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </Table>
      </Paper>
    </>
  );
};

export default Exercises;
