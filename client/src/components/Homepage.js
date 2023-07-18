import { Box, makeStyles } from "@material-ui/core";
import NavBar from "./home/NavBar";
import HomeCarousel from "./home/HomeCarousel";
import MiddlePart from "./home/MiddlePart";
import Slide from "./home/Slide";
import Home from "./home/Home";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems as listItems } from "../redux/actions/itemsActions";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Homepage = () => {
  const classes = useStyle();

  const { items } = useSelector((state) => state.getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <HomeCarousel />
        <Home items={items} />
        <MiddlePart />
        <Slide
          multi={true}
          timer={false}
          title="Discounts for You"
          Items={items}
        />
        <Slide
          multi={true}
          timer={false}
          title="Suggested Items"
          Items={items}
        />
        <Slide multi={true} timer={false} title="Top Deals" Items={items} />
        <Slide multi={true} timer={false} title="Best Sellers" Items={items} />
      </Box>
    </>
  );
};

export default Homepage;
