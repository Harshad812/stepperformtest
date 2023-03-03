import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useContext, useState } from "react";
import { UserContext } from "../stepperform";
import classes from "./userinformation.module.css";

export const UserInformation = () => {
  const { handleNext, setUser } = useContext(UserContext);
  const gender = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];
  const maritalStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  const initialValue = {
    firstName: "",
    middleName: "",
    lastName: "",
    mobile: "",
    email: "",
    birthday: "",
    age: "",
    bloodGroup: "",
    height: "",
    weight: "",
    gender: "female",
    maritalStatus: "single",
  };

  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setUser && setUser({ userDetails: formValues });
    handleNext && handleNext();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Middle Name"
                name="middleName"
                value={formValues.middleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Mobile No"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                type="email"
                className={classes.textbox}
                placeholder="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                type="date"
                className={classes.textbox}
                placeholder="Birth Day"
                name="birthday"
                value={formValues.birthday}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Age"
                name="age"
                value={formValues.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Blood Group"
                name="bloodGroup"
                value={formValues.bloodGroup}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Height"
                name="height"
                value={formValues.height}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                required
                className={classes.textbox}
                placeholder="Weight"
                name="weight"
                value={formValues.weight}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <RadioGroup
                value={formValues.gender}
                name="gender"
                onChange={handleChange}
                row
              >
                {gender.map((gender, i) => (
                  <FormControlLabel
                    key={i}
                    value={gender.value}
                    control={<Radio />}
                    label={gender.label}
                  />
                ))}
              </RadioGroup>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <RadioGroup
                value={formValues.maritalStatus}
                name="maritalStatus"
                onChange={handleChange}
                row
              >
                {maritalStatus.map((status, i) => (
                  <FormControlLabel
                    key={i}
                    value={status.value}
                    control={<Radio />}
                    label={status.label}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </div>
        <Button variant="contained" type="submit">
          save
        </Button>
      </form>
    </Box>
  );
};
