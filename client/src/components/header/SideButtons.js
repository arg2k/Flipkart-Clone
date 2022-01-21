import {
  Box,
  Button,
  makeStyles,
  Typography,
  Badge,
  Dialog,
} from "@material-ui/core";
import { height } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LoginDialog from "../login/Login";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  login: {
    color: '#2874f0',
    background: "#ffffff",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    height: 32,
    boxShadow: "none",
    [theme.breakpoints.down("md")]: {
      marginLeft: 50,
      background: "#2874f0",
      color: "#ffffff",
    },
  },
  outside: {
    margin: "0 15% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      fontSize: 12,
      alignItems: "center",
      // color: '#2874f0',
      [theme.breakpoints.down("md")]: {
        color: "#2874f0",
        backgroundColor: "white",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        "&:hover": {
        backgroundColor: "white",
        color: "#2874f0",
    },
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  more: {
    display: "flex",
    color: 'white',
    [theme.breakpoints.down("md")]: {
      marginTop: 30,
      marginLeft: 85,
      display: "block",
      color: '#2874f0'
    },
  },
  cart: {
    display: "flex",
    color: 'white',
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: 30,
      marginLeft: 85,
      color: '#2874f0'
    },
  },
}));

const SideButtons = () => {
  const classes = useStyle();
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const { acc, setAcc } = useContext(LoginContext);
  const showLoginDialog = () => {
    setShow(true);
  };
  const { cartItems } = useSelector((state) => state.addItemToCart);

  return (
    <Box className={classes.outside}>
      {acc ? (
        <Profile acc={acc} setAcc={setAcc} />
      ) : (
        <Button
          onClick={() => showLoginDialog()}
          variant="contained"
          className={classes.login}
        >
          Login
        </Button>
      )}
      <Link to="/more" className={classes.more}>
        <Typography style={{ marginTop: 2 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.cart}>
        <Badge
          badgeContent={cartItems.length}
          // style={{ marginBottom: 5 }}
          color="secondary"
        >
          <ShoppingCart />
        </Badge>
        <Typography
          style={{ fontWeight: 550 }}
        >
          Cart
        </Typography>
      </Link>
      <LoginDialog setShow={setShow} show={show} setAcc={setAcc} />
    </Box>
  );
};
export default SideButtons;
