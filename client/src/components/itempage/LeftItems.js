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
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> 94b663f6fafc0c0552a736e1a5443d6bf0a9b278

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

<<<<<<< HEAD
  // const buyNowHelper = async () => {
  //   let res = await payMoney({ amount: 200, email: "argha111234@gmail.com" });
  //   let info = {
  //     action: "http://securegw-stage.paytm.in/order/process",
  //     params: res,
  //   };
  //   post(info);
  // };

  const buyNowHelper = async () => {
    const { data: { key } } = await axios.get("http://13.233.30.28:8000/getkey")

   const { data: { order } } = await axios.post("http://13.233.30.28:8000/checkout", {
       amount:500
   })

   const options = {
       key,
       amount: order.amount,
       currency: "INR",
       name: "Argha Kole",
       description: "Tutorial of RazorPay",
       //image: "https://avatars.githubusercontent.com/u/25058652?v=4",
       order_id: order.id,
       callback_url: "http://13.233.30.28:8000/paymentverification",
       prefill: {
         name: "Argha Kole",
         email: "arghakole@email.com",
         contact: "1234567890"
       },
       notes: {
           "address": "West Bengal, India"
       },
       theme: {
           "color": "#121212"
       }
   };
   const razor = new window.Razorpay(options);
   razor.open();
 }
 
=======
  const buyNowHelper = async () => {
    let res = await payMoney({ amount: 200, email: "argha111234@gmail.com" });
    let info = {
      action: "http://securegw-stage.paytm.in/order/process",
      params: res,
    };
    post(info);
  };
>>>>>>> 94b663f6fafc0c0552a736e1a5443d6bf0a9b278
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
