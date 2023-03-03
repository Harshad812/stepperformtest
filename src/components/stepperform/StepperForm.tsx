import {
  Box,
  Button,
  Card,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AddressDetails } from "../addressdetails";
import { UserDetailsList } from "../userdetailslist";

import { UserInformation } from "./../userinformation";
import { UserContext, UserType } from "./UserContext";

function getSteps() {
  return ["User Information", "Address Information", "Thackyou"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <UserInformation />;
    case 1:
      return <AddressDetails />;
    case 2:
      return <UserDetailsList />;
    default:
      return "Unknown step";
  }
}

export const StepperForm = () => {
  const [user, setUser] = useState<UserType>();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();
  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: unknown) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Card style={{ padding: "32px" }}>
      <UserContext.Provider
        value={{
          user,
          setUser,
          handleNext,
          handleBack,
          handleSkip,
          handleReset,
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps: any = {};
            const labelProps: any = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Box sx={{ paddingTop: "52px" }}>
                {getStepContent(activeStep)}
              </Box>
            </div>
          )}
        </div>
      </UserContext.Provider>
    </Card>
  );
};
