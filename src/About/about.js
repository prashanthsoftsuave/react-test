import React from "react";

import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <div>
      <Box
        style={{
          margin: "120px auto",
          maxWidth: 500,
        }}
      >
        <Typography style={{ fontSize: 35 }}>Prashanth R</Typography>
        <Typography>React.js/ Next.js /Node.js Developer</Typography>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            style={{ maxWidth: 500, fontSize: 20, margin: "50px auto" }}
          >
            Passionate full stack developer with Frontend as my main focus,i
            have hands-on experience developing and implementing web
            applications and solutions using a range of programming languages
            and technologies mainly the MERN (MongoDB, Express, React, and
            Node.js) stack.
          </Typography>
        </Box>
        <Typography style={{ fontWeight: "600", margin: "10px" }}>
          BIO
        </Typography>
        <Box style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <Box style={{ fontWeight: "bold" }}>
            <Typography>Jun-1995</Typography>
            <Typography>Jun-2013</Typography>
          </Box>
          <Box style={{ textAlign: "left" }}>
            <Typography>Born</Typography>
            <Typography>started in vel tech university</Typography>
          </Box>
        </Box>
        <Box>
          <Typography style={{ fontWeight: "600", margin: "30px auto" }}>
            My Accounts
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MailIcon />{" "}
            <span style={{ margin: "auto 10px" }}> @prashanth</span>
          </Typography>
          <Typography
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              margin: "10px auto",
            }}
          >
            <GitHubIcon />{" "}
            <span style={{ margin: "auto 10px" }}> @prashanth</span>
          </Typography>
          <Typography
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              margin: "10px auto",
            }}
          >
            <TwitterIcon />{" "}
            <span style={{ margin: "auto 10px" }}> @prashanth</span>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default About;
