import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <div>
      <Box
        style={{
          margin: "120px auto",
          maxWidth: 500,
        }}
      >
        <Typography style={{ margin: "30px 0px" }} variant="h2">
          Education
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <SchoolIcon />{" "}
            <span style={{ margin: "0px 10px" }}> St Marys School</span>
          </Typography>
        </Box>
        <Box
          style={{
            margin: "10px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography style={{ display: "flex", alignItems: "center" }}>
            <SchoolIcon />{" "}
            <span style={{ margin: "0px 10px" }}> Vel tech university</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Education;
