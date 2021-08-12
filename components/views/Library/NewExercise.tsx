import Button from "../../Button";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { TitleRow, Paper } from "./shared";
import { useForm, Controller } from "react-hook-form";
import CustomSelect from "../../molecules/Select";
import useExercise from "../../lib/useExercise";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleSubmitEwercise(data, "POST");
    router.push("/library/exercises");
  };
  const { patterns, types, bodyParts, handleSubmitEwercise } = useExercise();
  return (
    <>
      <TitleRow>
        <h2>Dodaj nowe ćwiczenie</h2>
      </TitleRow>
      <Paper>
        <div className={classes.root}>
          <Controller
            name="name"
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
                error={errors.name}
                helperText={errors.name?.message}
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
            name="mediaUrl"
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
                error={errors.mediaUrl}
                helperText={errors.mediaUrl?.message}
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
                error={errors.description}
                helperText={errors.description?.message}
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
                options={patterns}
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
                options={types}
                name="types"
                label="Typ ćwiczenia"
              />
            )}
          />
          <Controller
            name="bodyParts"
            control={control}
            render={({ field: { onChange, value } }) => (
              <CustomSelect
                onChange={onChange}
                options={bodyParts}
                name="bodyParts"
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
