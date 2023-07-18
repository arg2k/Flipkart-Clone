import { useSelector } from "react-redux";
import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import ItemsInCart from "./ItemsInCart";
import { removeItemFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import CartEmpty from "./CartEmpty";
import RightSide from "./RightSide";
import { payMoney } from "../../service/Api";
import { post } from '../../utilities/payment';
import { useState } from "react";
import { useTheme } from "@emotion/react";
import axios from "axios";

const useStyle = makeStyles(theme =>({
  outside: {
    //marginTop: 55,
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0'
  }
  },
  leftstyling: {
    //width: "67%",
    paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
  },
  rightstyling: {
    width: "67%",
  },
  topstyling: {
    padding: "15px 24px",
    backgroundColor: "white",
  },
  btnstyling: {
    backgroundColor: "#fb641b",
    color: "white",
    borderRadius: 2,
    width: 250,
    height: 51,
    display: "flex",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#fb641b",
      color: "white",
    },
  },
  orderPlacing: {
    padding: "16px 22px",
    backgroundColor: "white",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 /10%)",
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.addItemToCart);
  const dispatch = useDispatch();
  const theme = useTheme();
  const removehandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
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
  const classes = useStyle();
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const priceDecreaseHandler = (cost) => {
    setTotal(price=>price-cost);
  }
  const priceIncreaseHandler = (cost) => {
    setTotal(price=>price+cost);
  }
  const discountDecreaseHandler = (cost) => {
    setDiscount(discount=>discount-cost);
  }
  const discountIncreaseHandler = (cost) => {
    setDiscount(discount=>discount+cost);
  }


  return (
    <>
      {cartItems.length ? (
        <Box className={classes.outside}>
          <Box className={classes.leftstyling}>
            <Box className={classes.topstyling}>
              <Typography style={{ fontSize: 18, fontWeight: 600 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <p>
                <ItemsInCart item={item} removehandler={removehandler} priceIncreaseHandler={priceIncreaseHandler} priceDecreaseHandler={priceDecreaseHandler} discountIncreaseHandler={discountIncreaseHandler} discountDecreaseHandler={discountDecreaseHandler}/>
              </p>
            ))}
            <Box className={classes.orderPlacing}>
              <Button
                onClick={() => buyNowHelper()}
                className={classes.btnstyling}
                variant="contained"
              >
                Place Order
              </Button>
            </Box>
          </Box>
          <RightSide cartItems={cartItems} totalPrice={total} totalDiscount={discount}/>
        </Box>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};
export default Cart;
