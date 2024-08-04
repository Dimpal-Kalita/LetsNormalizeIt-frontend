import React, { useState } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

const Signup = () => {
  const [fill, setfill] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const rawJSON = JSON.stringify({
    "Email": user.email,
    "Password": user.password
  }) 
  const sendRequest = async (type = "register") => {
   const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: rawJSON,
      redirect: "follow"
    };
    await fetch(`${BACKEND}/${type}`, requestOptions);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name === "" || user.email === "" || user.password === "") {
      setfill(true);
      return;
    }
    if (user.password.length < 8) {
      setError("Password must be atleast 8 characters long");
      return;
    }
    setfill(false);
    sendRequest().then(() => {
      setError("Please verify your email to login");
    }
    );
  };


  return (
    <Container component="main" maxWidth="x">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            autoComplete="name"
            margin="normal"
            name="name"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            onChange={(e) => onValueChange(e)}
          />
          <TextField
            autoComplete="email"
            margin="normal"
            name="email"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            onChange={(e) => onValueChange(e)}
          />
          <TextField
            autoComplete="password"
            margin="normal"
            name="password"
            required
            fullWidth
            id="password"
            label="Password"
            autoFocus
            onChange={(e) => onValueChange(e)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            SIGN UP
          </Button>
          {fill && <Typography color="red">* Please fill all the fields</Typography>}
          {error && <Typography color="red">* {error}</Typography>}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid marginTop="60px"></Grid>
    </Container>
  );
};

export default Signup;
