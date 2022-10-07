import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Projects = () => {
  return (
    <div>
      <Box
        style={{
          margin: "120px auto",
          maxWidth: 500,
        }}
      >
        <Typography variant='h2'>Projects</Typography>

        <Box style={{margin:'50px 0px'}}>
            <Typography sx={{m:3,fontSize:20 }}>Esense</Typography>
            <Typography sx={{m:3,fontSize:20 }}>Virujh</Typography>
            <Typography sx={{m:3,fontSize:20 }}>Trames</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
