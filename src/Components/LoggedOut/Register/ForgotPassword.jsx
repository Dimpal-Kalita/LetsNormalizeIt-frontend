import { useState } from "react";
import {
  CssBaseline,
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

const ForgotPassword = () => {
  const [user, setUser] = useState({email: ""});
  const [fill, setFill] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const rawJSON = JSON.stringify({
    "Email": user.email
  }) 

  const sendRequest = async (type = "forgot-password") => {
   const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: rawJSON,
      redirect: "follow"
    };
    const res = await fetch(`${BACKEND}/${type}`, requestOptions);
    const data = await res.json();
    return data;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      setFill(true);
      return;
    }
    setFill(false); 
    setError("");
    sendRequest();
    navigate("/signin");
  };

  return (
    <Container component="main" maxWidth="x">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            onChange={(e) => onValueChange(e)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          /> 
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {" "}
            Request Token{" "}
          </Button>
        </Box>
        {error && (
          <Typography component="h1" color="green">
            * {error}
          </Typography>
        )}
        {fill && (
          <Typography component="h1" color="red">
            * Please fill all the fields{" "}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPassword;
