import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { addItemToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { payMoney } from "../../service/Api";
import { post } from "../../utilities/payment";
import { LoginContext } from "../../context/ContextProvider";
import { useContext, useState } from "react";
import { useTheme } from "@emotion/react";

const useStyle = makeStyles((theme) => ({
  outside: {
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  imgstyling: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  btnstyling: {
    height: 65,
    width: "46%",
    borderRadius: 2,
  },
}));

const Leftitems = ({ item }) => {
  const classes = useStyle();
  const theme = useTheme();
  const navigate = useNavigate();
  const { account } = useContext(LoginContext);
  const { id, price, detailUrl, title } = item;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const addToCartHelper = () => {
    dispatch(addItemToCart(item.id, quantity));
    navigate("/cart");
  };

  const buyNowHelper = async () => {
    let res = await payMoney({ amount: 200, email: "argha111234@gmail.com" });
    let info = {
      action: "http://securegw-stage.paytm.in/order/process",
      params: res,
    };
    post(info);
  };
  return (
    <Box className={classes.outside}>
      <img src={item.detailUrl} className={classes.imgstyling} />
      <Button
        onClick={() => addToCartHelper()}
        style={{ color: "white", backgroundColor: "#ff9f00", marginRight: 10 }}
        variant="contained"
        className={classes.btnstyling}
      >
        <ShoppingCartIcon fontSize="small" style={{ marginRight: 7 }} /> ADD TO
        CART
      </Button>
      <Button
        onClick={() => buyNowHelper()}
        style={{ color: "white", backgroundColor: "#fb641b" }}
        variant="contained"
        className={classes.btnstyling}
      >
        <FlashOnIcon /> BUY NOW
      </Button>
    </Box>
  );
};

export default Leftitems;
