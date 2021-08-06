import Button from "../../Button";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { TitleRow, Paper } from "./shared";
import { useForm, Controller } from "react-hook-form";
import CustomSelect from "../../molecules/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  input: {
    border: "1px solid lightgrey",
    borderRadius: "10px",
  },
}));

const NewExercise = () => {
  const classes = useStyles();
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <TitleRow>
        <h2>Add new exercise</h2>
      </TitleRow>
      <Paper>
        <div className={classes.root}>
          <Controller
            name="exerciseName"
            control={control}
            defaultValue={""}
            rules={{ required: "Nazwa cwiczenia jest wymagana. " }}
            render={({ field: { onChange, value } }) => (
              <TextField
                id="outlined-full-width"
                label="Nazwa ćwiczenia*"
                style={{ margin: 8 }}
                placeholder="Nazwa ćwiczenia"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="mediaURL"
            control={control}
            defaultValue={""}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <TextField
                id="outlined-full-width"
                label="Wideo URL"
                style={{ margin: 8 }}
                placeholder="Wpisz tuatj link do wideo ćwiczenia"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue={""}
            rules={{ required: "Opis cwiczenia jest wymagany. " }}
            render={({ field: { onChange, value } }) => (
              <TextField
                id="outlined-full-width"
                label="Opis ćwiczenia *"
                style={{ margin: 8 }}
                placeholder=""
                multiline
                rows={4}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="patterns"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomSelect
                onChange={onChange}
                options={mockOptions}
                name="patterns"
                label="Patterny"
              />
            )}
          />
          <Controller
            name="types"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomSelect
                onChange={onChange}
                options={mockOptions}
                name="types"
                label="Typ ćwiczenia"
              />
            )}
          />
          <Controller
            name="primaryMuscles"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomSelect
                onChange={onChange}
                options={mockOptions}
                name="primaryMuscles"
                label="Glowne partie mięśniowe"
              />
            )}
          />
        </div>
        <TitleRow margin={"20px 10px"}>
          <Button primary onClick={handleSubmit(onSubmit)}>
            Save exercise
          </Button>
        </TitleRow>
      </Paper>
    </>
  );
};

export default NewExercise;

const mockOptions = [
  { value: 1, label: "TEST1" },
  { value: 2, label: "TEST 2" },
  { value: 3, label: "TEST 3" },
  { value: 4, label: "TEST 4" },
  { value: 5, label: "TEST 5" },
  { value: 6, label: "TEST 6" },
  { value: 7, label: "TEST 7" },
];
