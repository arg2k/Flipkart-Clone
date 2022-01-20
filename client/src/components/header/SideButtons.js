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

const useStyle = makeStyles({
  login: {
    backgroundColor: "white",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 550,
    borderRadius: 2,
    padding: "2px 40px",
    marginBottom: 8,
    height: 33,
    boxShadow: "none",
  },
  outside: {
    margin: "0 15% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      fontWeight: 550,
      color: "white",
    },
  },
  cart: {
    display: "flex",
    textDecoration: "none",
  },
});

const SideButtons = () => {
  const classes = useStyle();
  const [show, setShow] = useState(false);
  const {acc, setAcc} = useContext(LoginContext);
  const showLoginDialog = () => {
    setShow(true);
  };
  const {cartItems} = useSelector(state=> state.addItemToCart);

  return (
    <Box className={classes.outside}>
      {acc ? (
        <Profile acc={acc} setAcc={setAcc}/>
      ) : (
        <Button
          onClick={() => showLoginDialog()}
          variant="contained"
          className={classes.login}
        >
          <span style={{ color: "#2874f0" }}>Login</span>
        </Button>
      )}
      <Link to="/more">
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.cart}>
        <Badge badgeContent={cartItems.length} style={{ marginBottom: 5 }} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography
          style={{ marginLeft: 10, marginBottom: 5, fontWeight: 550 }}
        >
          Cart
        </Typography>
      </Link>
      <LoginDialog setShow={setShow} show={show} setAcc={setAcc}/>
    </Box>
  );
};
export default SideButtons;
