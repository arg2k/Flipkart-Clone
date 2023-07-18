import { Card, makeStyles, Box, Typography, Button, ButtonGroup } from "@material-ui/core";
import clsx from "clsx";
//import Counter from "./Counter";
import { useState } from "react";

const useStyle = makeStyles({
  outside: {
    display: "flex",
    borderRadius: 0,
    borderTop: "1px solid #f0f0f0",
  },
  leftstyling: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  rightstyling: {
    margin: 20,
  },
  textsizereducer: {
    fontSize: 14,
  },
  greyColor: {
    color: "#878787",
  },
  greenColor: {
    color: "#388E3C",
  },
  coststyling: {
    fontSize: 18,
    fontWeight: 600,
  },
  imgstyling: {
    height: 110,
    width: 110,
  },
  btnstyling: {
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
    marginTop: 20,
    fontSize: 15,
  },
  buttonoutside: {
    marginTop: 40,
  },
  buttoninside: {
    borderRadius: "50%",
    border: "1px solid #f0f0f0",
  },
});

const ItemsInCart = ({ item, removehandler, priceDecreaseHandler, priceIncreaseHandler, discountIncreaseHandler, discountDecreaseHandler }) => {
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const [value, setValue] = useState(1);
  const incrementHandler = () => {
    setValue((value) => value + 1);
    priceIncreaseHandler(item.price.mrp);
    discountIncreaseHandler(item.price.mrp-item.price.cost);
  };
  const decrementHandler = () => {
    if (value == 1) return;
    setValue((value) => value - 1);
    priceDecreaseHandler(item.price.mrp);
    discountDecreaseHandler(item.price.mrp-item.price.cost);
  };

  return (
    <Card className={classes.outside}>
      <Box className={classes.leftstyling}>
        <img src={item.url} className={classes.imgstyling} />
        <ButtonGroup className={classes.buttonoutside}>
          <Button onClick={() => decrementHandler()} className={classes.buttoninside}>
            -
          </Button>
          <Button>{value}</Button>
          <Button onClick={() => incrementHandler()} className={classes.buttoninside}>
            +
          </Button>
        </ButtonGroup>
      </Box>
      <Box className={classes.rightstyling}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          className={clsx(classes.textsizereducer, classes.greyColor)}
          style={{ marginTop: 10 }}
        >
          Seller: Vision Star
          <span>
            <img style={{ width: 50, marginLeft: 10 }} src={fassured} />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0px" }}>
          <span className={classes.coststyling}>₹{item.price.cost*value}</span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greyColor}>
            <strike>₹{item.price.mrp*value}</strike>
          </span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greenColor}>{parseInt(((item.price.mrp-item.price.cost)/item.price.mrp*100),10)}% Off</span>
        </Typography>
        <Button
          onClick={() => removehandler(item.id)}
          className={classes.btnstyling}
        >
          remove
        </Button>
      </Box>
    </Card>
  );
};

export default ItemsInCart;
