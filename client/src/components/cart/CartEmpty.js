import { Box } from "@mui/system";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  outside: {
    margin: "80px 140px",
    width: "80%",
    background: "white",
    height: "65vh",
  },
  imgstyling: {
    width: "25%",
  },
  inside: {
    textAlign: "center",
    paddingTop: "70px",
    "&>*": {
      marginTop: 10,
      fontSize: 18,
    },
  },
  textsizereducer: {
    fontSize: 14,
  },
  btnstyling: {
    color: 'white',
    backgroundColor: '#2874f0',
    '&:hover': {
        backgroundColor: '#2874f0',
        color: 'white',
    },
    borderRadius: 2,
    fontSize: 15,
    marginTop: 20,
    padding: '8px 75px'
  },
});

const CartEmpty = () => {
  const navigate = useNavigate();
  const shopItems = () => {
    navigate("/");
  };
  const classes = useStyle();
  const cartemptyurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <Box className={classes.outside}>
      <Box className={classes.inside}>
        <img src={cartemptyurl} className={classes.imgstyling} />
        <Typography>Your cart is empty!</Typography>
        <Typography className={classes.textsizereducer}>
          Add items to it now.
        </Typography>
        <Button
            className={classes.btnstyling}
          onClick={() => shopItems()}
          variant="contained"
          style={{ textTransform: "none" }}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
};

export default CartEmpty;
