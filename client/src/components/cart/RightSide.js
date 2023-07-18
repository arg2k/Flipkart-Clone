import { Typography, Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
  outside: {
    marginLeft: 20,
    width: "30%",
    backgroundColor: "white",
  },
  topstyling: {
    paddingLeft: "25px",
    paddingBottom: "15px",
    paddingTop: "65px",
    borderBottom: "1px solid #f0f0f0",
  },
  inside: {
    padding: "15px 24px",
    "&>*": {
      marginTop: 20,
      fontSize: 15,
    },
  },
  greyColor: {
    color: "#878787",
  },
  coststyling: {
    float: "right",
  },
  greenColor: {
    color: "#388E3C",
  },
  totalamountstyling: {
      fontSize: 18,
      fontWeight: 600,
      borderTop: '1px dashed #e0e0e0',
      padding : '20px 0px',
      borderBottom: '1px dashed #e0e0e0',
  }
});

const RightSide = ({ cartItems, totalPrice, totalDiscount }) => {
  const classes = useStyle();
  const [curcost, setCurcost] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [cartItems]);

  const calculatePrice = () => {
    let nowPrice = 0,
      nowDiscount = 0;
    cartItems.map((item) => {
      nowPrice += item.price.mrp;
      nowDiscount += item.price.mrp - item.price.cost;
    });
    //nowPrice*=value;
    //nowDiscount*=value;
    setCurcost((curcost) => nowPrice);
    setDiscount((discount) => nowDiscount);
  };
  return (
    <Box className={classes.outside}>
      <Box className={classes.topstyling}>
        <Typography className={classes.greyColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.inside}>
        <Typography>
          Price ({cartItems.length} item){" "}
          <span className={classes.coststyling}>₹{totalPrice+curcost}</span>
        </Typography>
        <Typography>
          Discount{" "}
          <span className={clsx(classes.greenColor, classes.coststyling)}>
            −₹{discount+totalDiscount}
          </span>
        </Typography>
        <Typography>
          Delivery Charges
          <span className={clsx(classes.greenColor, classes.coststyling)}>
            FREE
          </span>
        </Typography>
        <Typography className={classes.totalamountstyling}>
          Total Amount{" "}
          <span className={classes.coststyling}>₹{curcost + totalPrice - discount - totalDiscount }</span>
        </Typography>
        <Typography className={classes.greenColor}>
          You will save ₹{discount+totalDiscount} on this order
        </Typography>
      </Box>
    </Box>
  );
};
export default RightSide;
