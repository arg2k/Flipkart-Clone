import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles(theme=>({
  img: {
    height: 150,
    width: "auto",
    // display: 'flex',
    // alignItems: 'center'
  },
  outside: {
    // marginTop: 10,
    // marginLeft: 105,
    // marginRight: 10,
    // backgroundColor: "white",
    marginTop: 12,
    background: '#FFFFFF'
  },
  dealstyling: {
    padding: "15px 20px",
    display: "flex",
  },
  dealtextstyling: {
    fontSize: 22,
    fontWeight: 550,
    lineHeight: "32px",
    marginRight: 25,
  },
  timerstyling: {
    color: "#7f7f7f",
    marginLeft: 10,
    alignItems: "center",
    display: "flex",
  },
  timerstyling: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonstyling: {
    marginLeft: "auto",
    backgroundColor: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5
  },
  wrapper: {
    padding: '25px 15px',
  },
}));

const MultiCarousel = ({ timer, title, Items }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const classes = useStyle();
  const theme = useTheme();
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timerstyling}>
        {" "}
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <Box className={classes.outside}>
      <Box className={classes.dealstyling}>
        <Typography className={classes.dealtextstyling}>{title}</Typography>
        {timer && (
          <>
            <img src={timerURL} style={{ width: 24 }}></img>
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonstyling}
            >
              VIEW ALL
            </Button>
          </>
        )}
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        autoPlay={true}
        autoPlaySpeed={11100}
        keyBoardControl={true}
        //removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Items.map((Item) => (
          <Link to={`item/${Item.id}`}>
            <Box textAlign="center" className={classes.wrapper}>
              <img src={Item.url} className={classes.img} />
              <Typography
                style={{ fontWeight: 600, color: "#212121" }}
                className={classes.text}
              >
                {Item.title.shortTitle}
              </Typography>
              <Typography style={{ color: "green" }} className={classes.text}>
                {Item.discount}
              </Typography>
              <Typography style={{ color: "#7f7f7f" }} className={classes.text}>
                {Item.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

const Slide = (props) => {
  return (
      <>
          {
              props.multi === true ? <MultiCarousel {...props} /> : ''      
          }
      </>
  )
}

export default Slide;
