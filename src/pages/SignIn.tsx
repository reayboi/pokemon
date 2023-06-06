import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function handleSignIn() {}

function SignIn() {
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
          id="username"
          label="Username"
          variant="outlined"
          sx={{ paddingBottom: 3 }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ paddingBottom: 3 }}
          type="password"
        />
        <Button variant="contained" onClick={handleSignIn}>
          Sign In
        </Button>
      </FormControl>
    </Grid>
  );
}

export default SignIn;
