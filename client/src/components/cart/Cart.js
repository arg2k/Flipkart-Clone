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

const useStyle = makeStyles({
  outside: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
  },
  leftstyling: {
    width: "67%",
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
    width: 270,
    height: 50,
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
});

const Cart = () => {
  const { cartItems } = useSelector((state) => state.addItemToCart);
  const dispatch = useDispatch();
  const removehandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
  const buyNowHelper = async () => {
    let res = await payMoney({ amount: 200, email: "argha111234@gmail.com" });
    let info = {
      action: "http://securegw-stage.paytm.in/order/process",
      params: res,
    };
    post(info);
  };
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
