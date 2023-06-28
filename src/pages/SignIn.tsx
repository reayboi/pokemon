import {
  Alert,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../utils/contexts/AuthContext";
import { UserData } from "../types/User";
import Banner from "../common/Banner";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<boolean>(false);
  const { setToken, userData, setUserData } = useContext(AuthContext);

  function handleSignIn(email: string, password: string) {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        setAuthError(false);
        const user = userCredential.user;
        setUserData({
          username: user.displayName!,
          email: user.email!,
          uid: user.uid!,
        });
        // const token = await user.getIdToken();
        // setToken(token);
        window.localStorage.setItem("userData", JSON.stringify(user));
        navigate("/play");
      })
      .catch((error) => {
        setAuthError(true);
      });
  }

  const getLocalUser = async () => {
    let data = await localStorage.getItem("userData");
    if (!data) return null;
    let localData: UserData = JSON.parse(data);
    setUserData({
      username: localData.displayName,
      email: localData.email,
      uid: localData.uid,
    });
    return data;
  };

  const handleEffect = async () => {
    const data = await getLocalUser();
    if (data) {
      navigate("/play");
    }
  };

  useEffect(() => {
    handleEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Banner />
      </div>
      {authError && (
        <Alert
          severity="error"
          sx={{
            position: "absolute",
            top: 25,
            width: 450,
          }}
        >
          Looks like there was a problem while signing in, try again!
        </Alert>
      )}

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
          label="Email address"
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
            handleSignIn(email, password);
          }}
          sx={{ marginBottom: 3 }}
        >
          Sign In
        </Button>
        <Link to="/CreateAccount">
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Don't have an account? Register here
          </Typography>
        </Link>
      </FormControl>
      <Typography variant="body1" sx={{ paddingTop: 3, color: "white" }}>
        {userData ? JSON.stringify(userData) : " no data"}
      </Typography>
    </Grid>
  );
}

export default SignIn;
