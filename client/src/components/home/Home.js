import NavBar from "./NavBar";
import HomeCarousel from "./HomeCarousel";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import Slide from "./Slide";
//import { Items } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItems as listItems } from "../../redux/actions/itemsActions";
import MiddlePart from "./MiddlePart";
import { useTheme } from '@material-ui/core/styles';

const useStyle = makeStyles(theme=>({
  outside: {
    // paddingTop: 10,
    // paddingBottom: 0,
    // backgroundColor: "#f2f2f2",
    display: "flex",
  },
  leftstyling: {
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  sidestuff: {
    marginTop: 12,
    background: "#FFFFFF",
    width: "17%",
    marginLeft: 10,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Home = ({ items }) => {
  const classes = useStyle();
  const theme = useTheme();
  const imgURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/a33323ee3a5b0bc5.jpg?q=70";

  return (
      <Box className={classes.outside}>
        <Box className={classes.leftstyling}>
          <Slide
            timer={true}
            title="Deals of the Day"
            multi={true}
            Items={items}
          />
        </Box>
        <Box className={classes.sidestuff}>
          <img src={imgURL} style={{ width: 236 }}></img>
        </Box>
      </Box>
  );
};

export default Home;
