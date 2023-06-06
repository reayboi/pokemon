import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

function handleSignIn(
  email: string,
  password: string,
  navigate?: NavigateFunction
) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // navigate("/play");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

function SignIn() {
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
        Sign In
      </Typography>
      <FormControl
        sx={{
          backgroundColor: "white",
          padding: 2,
          borderRadius: 1,
          width: "300px",
        }}
      >
        <TextField
          id="email"
          label="Username"
          variant="outlined"
          sx={{ paddingBottom: 3 }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
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
            handleSignIn(email, password, navigate);
          }}
        >
          Sign In
        </Button>
      </FormControl>
    </Grid>
  );
}

export default SignIn;
