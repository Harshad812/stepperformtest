import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext, UserType } from "../stepperform";
import classes from "./addressdetails.module.css";

export const AddressDetails = () => {
  const { handleNext, handleBack, user, setUser } = useContext(UserContext);

  const cities = [
    {
      value: "Ahmedabad",
      label: "Ahmedabad",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Delhi",
      label: "Delhi",
    },
    {
      value: "Hyderabad",
      label: "Hyderabad",
    },
    {
      value: "Kolkata",
      label: "Kolkata",
    },
    {
      value: "Mumbai",
      label: "Mumbai",
    },
    {
      value: "Pune",
      label: "Pune",
    },
  ];

  const states = [
    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh",
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh",
    },
    {
      value: "Assam",
      label: "Assam",
    },
    {
      value: "Bihar",
      label: "Bihar",
    },
    {
      value: "Chhattisgarh",
      label: "Chhattisgarh",
    },
    {
      value: "Goa",
      label: "Goa",
    },
    {
      value: "Gujarat",
      label: "Gujarat",
    },
    {
      value: "Haryana",
      label: "Haryana",
    },
    {
      value: "Himachal Pradesh",
      label: "Himachal Pradesh",
    },
  ];

  const countries = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "Afghanistan",
      label: "Afghanistan",
    },
    {
      value: "Albania",
      label: "Albania",
    },
    {
      value: "Algeria",
      label: "Algeria",
    },
    {
      value: "American Samoa",
      label: "American Samoa",
    },
    {
      value: "Andorra",
      label: "Andorra",
    },
  ];

  const [formValues, setFormValues] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    pincode: "",
  });

  const handleChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);

    setUser &&
      setUser((prev: UserType) => {
        return {
          ...prev,
          addressDetails: formValues,
        };
      });
    handleNext && handleNext();
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.userForm}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: "32px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={classes.textbox}
                placeholder="Address Line 1"
                name="addressLine1"
                value={formValues.addressLine1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={classes.textbox}
                placeholder="Address Line 1"
                name="addressLine2"
                value={formValues.addressLine2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Select
                className={classes.textbox}
                defaultValue="lable"
                name="city"
                value={formValues.city}
                onChange={handleChange}
              >
                <MenuItem value="lable" disabled>
                  City
                </MenuItem>
                {cities.map((city, i) => (
                  <MenuItem value={city.value} key={i}>
                    {city.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Select
                className={classes.textbox}
                defaultValue="lable"
                name="state"
                value={formValues.state}
                onChange={handleChange}
              >
                <MenuItem value="lable" disabled>
                  State
                </MenuItem>
                {states.map((state, i) => (
                  <MenuItem value={state.value} key={i}>
                    {state.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Select
                className={classes.textbox}
                defaultValue="lable"
                name="country"
                value={formValues.country}
                onChange={handleChange}
              >
                <MenuItem value="lable" disabled>
                  Country
                </MenuItem>
                {countries.map((country, i) => (
                  <MenuItem value={country.value} key={i}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                className={classes.textbox}
                placeholder="Pin Code"
                name="pincode"
                value={formValues.pincode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => handleBack && handleBack()}>
            Back
          </Button>
          <Button variant="contained" type="submit">
            save
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
