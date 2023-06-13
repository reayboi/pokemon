import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

function handleCreateAccount(
  email: string,
  password: string,
  navigate: NavigateFunction
) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/play");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h2" sx={{ paddingBottom: 3, color: "white" }}>
        Create an account
      </Typography>
      <FormControl
        sx={{
          backgroundColor: "white",
          padding: 2,
          borderRadius: 1,
          width: "300px",
        }}
      >
        <Typography variant="body2" sx={{ paddingBottom: 2 }}>
          Enter email address:
        </Typography>
        <TextField
          id="email"
          label="Email address"
          variant="outlined"
          sx={{ paddingBottom: 2 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Typography variant="body2" sx={{ paddingBottom: 2 }}>
          Enter password:
        </Typography>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ paddingBottom: 3 }}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            handleCreateAccount(email, password, navigate);
          }}
        >
          Create
        </Button>
      </FormControl>
    </Grid>
  );
}

export default CreateAccount;
