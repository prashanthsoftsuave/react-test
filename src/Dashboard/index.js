import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Route, Routes } from "react-router-dom"
import Projects from "../Projects";


import About from "../About/about";
import { Link } from "react-router-dom";

function Dashboard() {
  const [dark, setDark] = React.useState("#202023");
  const [isdark, setIsDark] = React.useState(false);

  const handledark = () => {
    setIsDark((prev) => !prev);
    if (isdark) {
      setDark("#202023");
    } else {
      setDark("#e8eaf6");
    }
  };

  return (
    <div>
      {" "}
      <Box
        sx={{
          flexGrow: 1,
          background: `${dark}`,
          height: "100vh",
          color: !isdark ? "#fff" : "#000",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px 0px 0px 0px",
          }}
        >
          <Link
            to="/"
            color="inherit"
            style={{
              color: !isdark ? "#fff" : "#000",
              margin: "0px 20px",
              textDecoration: "none",
            }}
          >
            {" "}
            Home{" "}
          </Link>
          {/* <Typography style={{ margin: "0px 20px" }}>Home</Typography> */}
          <Typography style={{ margin: "0px 20px" }}>Education</Typography>
          <Link
            to="/projects"
            color="inherit"
            style={{
              color: !isdark ? "#fff" : "#000",
              margin: "0px 20px",
              textDecoration: "none",
            }}
          >
            {" "}
            Projects{" "}
          </Link>

          <Button
            color="inherit"
            onClick={handledark}
            style={{ position: "absolute", right: 0 }}
          >
            {isdark ? <DarkModeIcon /> : <WbSunnyIcon />}
          </Button>
        </Box>
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
        
      </Box>
    </div>
  );
}

export default Dashboard;
