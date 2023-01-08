import { Box, Stepper, Step, StepLabel, Typography, StepContent, Button, Paper, List } from "@mui/material";
import { useState } from "react";
import { getDetails } from "./about";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function EducationStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const about = getDetails();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center", background: "transparent" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {about[0].education.map((step, index) => (
          <Step key={step.school} sx={{ border: "1px solid #3a3a3a", borderRadius: "6px", padding: "0 12px 0 12px" }}>
            <StepLabel
              sx={{
                "& .MuiStepIcon-root.Mui-active": {
                  color: "#ffae00",
                },
                "& .MuiStepIcon-root.Mui-completed": {
                  color: "#ffae00",
                },
                "& .Mui-active .MuiStepIcon-text": {
                  fill: "#000",
                }
              }}
              optional={
                <Typography variant="caption"
                  color="#ffae00"
                  sx={{
                    fontSize: "23px",
                    fontFamily: "ChakraPetch SemiBold",
                  }}
                >{step.degree}</Typography>
              }
            >
              <Typography
                sx={{
                  paddingLeft: "2px",
                  fontSize: "16px",
                  fontFamily: "ChakraPetch Light",
                  color: "#fff"
                }}>
                {step.school}
              </Typography>
            </StepLabel>

            <StepContent sx={{ border: "none" }}>
              {step.skills !== null
                ? step.skills.map((skill) => {
                  return (
                    <List
                      sx={{
                        p: 0.3,
                        color: "#fff",
                        fontSize: "15px",
                        fontFamily: "ChakraPetch Light",
                      }}
                    ><FiberManualRecordIcon sx={{ fontSize: "10px" }} /> {skill}</List>
                  );
                })
                : ""}

              <Box sx={{ mb: 2 }}>
                <Box style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                  <Box>
                    <Button
                      className="gradient-background"
                      variant="contained"
                      onClick={index === about[0].education.length - 1 ? handleReset : handleNext}
                      sx={{ mt: 1, mr: 1, color: "#fff", fontWeight: "200" }}
                    >
                      {index === about[0].education.length - 1 ? 'Reset' : 'Show Me More'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1, color: "#fff" }}
                    >
                      {index === about[0].education.length - 1 ? '' : 'Back'}
                    </Button>
                  </Box>

                  <Typography
                    color="#8a8a8a"
                    sx={{
                      paddingTop: "8px",
                      fontSize: "14px",
                      fontFamily: "ChakraPetch Light",
                    }}
                  >{step.year}</Typography>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default EducationStepper;