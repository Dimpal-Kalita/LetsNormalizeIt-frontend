import { Box, Typography } from "@mui/material";

import style from "./Error.module.scss";

const Error = () => {
  return (
    <Box className={style.error} sx={{ mt: 10, display: "flex" }}>
      <Typography variant="h2">404 Page not Found </Typography>
    </Box>
  );
};

export default Error;
