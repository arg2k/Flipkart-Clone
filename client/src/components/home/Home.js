import NavBar from "./NavBar";
import HomeCarousel from "./HomeCarousel";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import MultiCarousel from "./MultiCarousel";
//import { Items } from "../../constants/data";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {getItems as listItems} from '../../redux/actions/itemsActions';

const useStyle = makeStyles({
  outside: {
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: "#f2f2f2",
  },
  sidestuff: {
    backgroundColor: "white",
    paddingTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 3,
    margin: "8px 100px 0px 0px",
  },
});

const Home = () => {
  const classes = useStyle();
  const imgURL = "https://rukminim1.flixcart.com/flap/464/708/image/a33323ee3a5b0bc5.jpg?q=70";
  
  const {items} = useSelector(state=> state.getItems);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(listItems())
  },[dispatch])

  return (
    <div>
      <NavBar />
      <Box className={classes.outside}>
        <HomeCarousel />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "80.8%" }}>
            <MultiCarousel timer={true} title="Deal of the Day" Items={items}/>
          </Box>
          <Box className={classes.sidestuff}>
            <img src={imgURL} style={{ height: 364, width: 236 }}></img>
          </Box>
        </Box>
        <MultiCarousel timer={false} title="Discounts for You" Items={items}/>
        <MultiCarousel timer={false} title="Suggested Items" Items={items}/>
      </Box>
    </div>
  );
};

export default Home;
