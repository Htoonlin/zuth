import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Grid justifyContent="center" textAlign="center">
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              404 Not Found !
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {"Oops! The page you're looking for could not be found."}
            </Typography>
          </Container>
          <Button variant="contained" onClick={handleLogin}>
            Go back home
          </Button>
        </Grid>
      </Box>
    </>
  );
};
export default NotFound;
