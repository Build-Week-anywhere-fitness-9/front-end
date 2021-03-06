import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import schema from "../Validation/formSchema.js";
import * as yup from "yup";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Container,
  Box,
  Typography,
  TextField,
  MenuItem,
  Slider,
  Button,
} from "@mui/material";


const types = [ 
  "Cardio", 
  "Crossfit", 
  "Weight training", 
  "Pilates", 
  "Aerobic", 
  "Karate", 
  "Yoga" 
];

const durations = [
  "0:15",
  "0:30",
  "0:45",
  "1:00",
  "1:15",
  "1:30",
  "1:45",
  "2:00",
];

const intensitySliderMarks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

const initialFormState = {
    type: '',
    maxSize: '',
    date: '',
    time: '',
    duration: '',
    intensity: 1,
    name: '',
    cost: '',
    location: '',
    owner: 'Fred'
  };

const initialFormErrors = {
  name: "",
  time: "",
  date: "",
  type: "",
  duration: "",
  intensity: "",
  location: "",
  maxSize: "",
};

const initialDisabled = true;

export default function ClassForm({ reschedule, update }) {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const push = useHistory();

  const handleChange = (event, name) => {
    if (name === "time" || name === "date") {
      setFormState({ ...formState, [name]: event });
    } else {
      validate(event.target.name, event.target.value);
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedClass = { ...formState };
    formattedClass.time = format(formattedClass.time, "h:m aaa");
    formattedClass.date = format(formattedClass.date, "PPP");

    if (!update && !reschedule) {
      /**
        axiosWithAuth().post(`url`, formattedClass).then(res => {
          setClasses(res.data)
          push("/instructor")
        })
        */
    }

    if (update || reschedule) {
      /**
         axiosWithAuth().patch(`url` formattedClass).then(res => {
           setClasses(res.data)
           push("/instructor")
     }).catch(err => {})
     */
    }
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => setDisabled(!valid));
  }, [formState]);

  // useEffect(() => {
  //   if (update || reschedule) {
  //     /*
  //   axios.get(`url/${id}`).then(res => {
  //     setFormState(res.data)
  //   })
  //   */
  //   }
  // }, []);


  return (
    <StyledFormContainer className=".classform-page">
      <Container component="div" maxWidth="md">
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Typography gutterBottom variant="h4" component="div" align="center">
            {reschedule && "Reschedule Your Class"}
            {update && "Update Your Class"}
            {!reschedule && !update && "Create a Class"}
          </Typography>

          <TextField
            id="class-name-input"
            label="Class Name"
            variant="outlined"
            name="name"
            disabled={reschedule}
            value={formState.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />

          <TextField
            id="class-type-input"
            select
            label="Class Type"
            name="type"
            disabled={reschedule}
            value={formState.type}
            onChange={handleChange}
            error={!!formErrors.type}
            helperText={
              formErrors.type
                ? formErrors.type
                : "Please select your class type"
            }
          >
            {/* Mapping through our pre-set dropdown menu objects/arrays */}
            {types.map((option) => (
              <MenuItem key={option.type} value={option.type}>
                {option.type}
              </MenuItem>
            ))}
          </TextField>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Start Time"
              id="start-time-input"
              value={formState.time}
              onChange={(event) => {
                handleChange(event, "time");
              }}
              variant="outlined"
              error={!!formErrors.time}
              helperText={formErrors.time ? formErrors.time : null}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <br></br>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Pick a Date"
              value={formState.date}
              className="MuiDatePicker"
              minDate={new Date()}
              onChange={(event) => {
                handleChange(event, "date");
              }}
              error={!!formErrors.date}
              helperText={
                formErrors.date
                  ? formErrors.date
                  : "Must be scheduled 5 days in advance."
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            id="duration-input"
            select
            className="MuiTimePicker"
            label="Class Duration"
            name="duration"
            disabled={reschedule}
            value={formState.duration}
            onChange={handleChange}
            helperText="Please select your workout duration"
          >
            {durations.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Typography
            variant="p"
            htmlFor="intensity-input"
            display="block"
            align="center"
          >
            Workout Intensity
          </Typography>

          <Slider
            aria-label="Custom marks"
            defaultValue={1}
            step={1}
            disabled={reschedule}
            valueLabelDisplay="auto"
            marks={intensitySliderMarks}
            id="intensity-input"
            label="Workout Intensity"
            name="intensity"
            onChange={handleChange}
            min={1}
            max={5}
          />

          <TextField
            id="location-input"
            label="Location"
            variant="outlined"
            name="location"
            value={formState.location}
            onChange={handleChange}
            error={!!formErrors.location}
            helperText={formErrors.location}
          />

          <TextField
            id="max-capacity-input"
            label="Max Capacity"
            variant="outlined"
            type="number"
            name="maxSize"
            disabled={reschedule}
            value={formState.maxSize}
            onChange={handleChange}
            error={!!formErrors.maxSize}
            helperText={formErrors.maxSize}
          />

          <div className="buttons">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
              disabled={disabled}
            >
              {reschedule && "Reschedule"}
              {update && "Update"}
              {!reschedule && !update && "Create"}
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="error"
              onClick={() => {
                push("/instructor");
              }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Container>
    </StyledFormContainer>
  );
}

// styles
const StyledFormContainer = styled.div`
  margin-top: 2rem;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .MuiContainer-root {
    background-color: white;
    border-radius: 0.5rem;
  }
  .MuiBox-root {
    padding: 2.5rem;
  }
  .MuiTextField-root,
  .MuiSlider-root {
    margin: 1rem 1rem;
  }
  span.MuiTypography-p {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.03333em;
  }
  @media (min-width: 500px) {
    div.buttons {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
  }`