import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { authenticateSignup, authenticateLogin } from "../../service/Api";


const useStyle = makeStyles({
  contentstyling: {
    height: "70vh",
    width: "90vh",
    maxWidth: 'unset !important'
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "&>*": {
      color: "white",
      fontWeight: 600,
    },
  },
  rightstyling: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "&>*": {
      marginTop: 20,
    },
  },
  textstyling: {
    color: "#878787",
    fontSize: 12,
  },
  loginstyling: {
    textTransform: "none",
    backgroundColor: "#fb641b",
    color: "white",
    height: 48,
    borderRadius: 2,
    "&:hover": {
        backgroundColor: "white",
        color: "#2874f0",
    },
  },
  loginstyling2: {
    textTransform: "none",
    backgroundColor: "white",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    fontWeight: 600,
    "&:hover": {
        backgroundColor: "white",
        color: "#2874f0",
    },
  },
  otpstyling: {
    textTransform: "none",
    backgroundColor: "#ffffff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    fontWeight: 550,
    boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  lasttextstyling: {
    textAlign: "center",
    marginTop: "auto",
    color: "#2874f0",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  errstyling: {
    fontSize: 14,
    color: 'red',
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600
  }
});

const initial = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here!`, 
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitial = {
  mobileNumber: "",
  password: ""
}

const loginInitial = {
  mobileNumber: "",
  password: ""
}

const Login = ({ show, setShow, setAcc }) => {
  const [account, setAccount] = useState(initial.login);
  const [signup, setSignup] = useState(signupInitial);
  const [login, setLogin] = useState(loginInitial);
  const [err, setErr] = useState(false);
  const classes = useStyle();
  const closeHandler = () => {
    setShow(false);
    setAccount(initial.login);
  };
  const changeAccountStatus = (curAcc) =>{
      if(curAcc==="login")
      {      
        setAccount(initial.signup);
      }
      else
      {
        setAccount(initial.login);
      }
  }

  const signupUser = async() => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    closeHandler();
    setAcc(signup.mobileNumber);
  }

  const loginHandler = async() => {
    let response = await authenticateLogin(login);
    if(!response) 
    {
      setErr(true);
      return;
    }
    setErr(false);
    closeHandler();
    setAcc(login.mobileNumber);
  }

  const signupChangedHandler = (event) => {
    setSignup({...signup, [event.target.name]: event.target.value});
  }

  const loginChangedHandler = (event) => {
    setErr(false);
    setLogin({...login, [event.target.name]: event.target.value});
  }

  return (
    <Dialog open={show} onClose={closeHandler}>
      <DialogContent className={classes.contentstyling}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.rightstyling}>
              <TextField onChange={(event) => loginChangedHandler(event)} name="mobileNumber" label="Enter Email/Mobile number" />
              <TextField onChange={(event) => loginChangedHandler(event)} name="password" label="Enter Password" />
              {err && <Typography className={classes.errstyling}> Invalid mobileNumber or password</Typography>}
              <Typography className={classes.textstyling}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button onClick={()=>loginHandler()} variant="contained" className={classes.loginstyling}>
                Login
              </Button>
              <Typography style={{ fontSize: 14, textAlign: "center" }}>
                OR
              </Typography>
              <Button variant="contained" className={classes.otpstyling}>
                Request OTP
              </Button>
              <Typography onClick={() => changeAccountStatus("login")} className={classes.lasttextstyling}>
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.rightstyling}>
              <TextField onChange={(event) => signupChangedHandler(event)} name="mobileNumber" label="Enter Mobile number" />
              <TextField onChange={(event) => signupChangedHandler(event)} name="password" label="Enter Password" />
              <Typography className={classes.textstyling}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button onClick={() => signupUser()} variant="contained" className={classes.loginstyling}>
                CONTINUE
              </Button>
              <Button onClick={() => changeAccountStatus("signup")} variant="contained" className={classes.loginstyling2} >
                Existing User? Log in
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
