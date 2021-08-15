import Button from "../../atoms/Button";
import Link from "next/link";
import Chip from "../../atoms/Chip";
import { TitleRow, Paper, Table, ErrorMessage } from "./shared";

export type Exercise = {
  bodyParts?: { name: string; id: number | string }[];
  description: string;
  mediaUrl: string;
  name: string;
  patterns?: { title: string; id: number | string }[];
  types?: { title: string; id: number | string }[];
  id: string;
};

type Props = {
  exercises: Exercise[];
};
const Exercises = ({ exercises }: Props) => {
  return (
    <>
      <TitleRow>
        <h2>Biblioteka ćwiczeń</h2>
        <Link href="/library/exercises/new" passHref>
          <Button primary>Dodaj ćwiczenie</Button>
        </Link>
      </TitleRow>
      <Paper>
        {exercises && exercises.length < 1 ? (
          <ErrorMessage>
            <p>Wygląda na to, że nie masz jeszcze żadnych ćwiczeń.</p>
            <Link href="/library/exercises/new" passHref>
              <Button primary>Dodaj ćwiczenie</Button>
            </Link>
          </ErrorMessage>
        ) : (
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
                  <div className="flex-table row" key={exercise.id}>
                    <div className="flex-row first">{exercise.name}</div>
                    <div className="flex-row">
                      <div className="rowspan">
                        {exercise.patterns?.map((pattern) => (
                          <Chip primary margin={"4px"}>
                            {pattern.title}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <div className="flex-row">
                      <div className="rowspan">
                        {" "}
                        {exercise.types?.map((type) => (
                          <Chip primary margin={"4px"}>
                            {type.title}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <div className="flex-row">
                      <div className="rowspan">
                        {" "}
                        {exercise.bodyParts?.map((muscle) => (
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
        )}
      </Paper>
    </>
  );
};

export default Exercises;
