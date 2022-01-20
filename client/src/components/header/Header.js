import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import SearchBar from "./SearchBar";
import SideButtons from "./SideButtons";

const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
    //display: "inline-block"
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginTop: "0.05%",
    marginLeft: "19.5%",
    marginBottom: "0.5%",
    //margin: "1%",
    textDecoration: 'none',
    color: 'white',
    lineHeight: 0,
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  root: {
    minHeight: 64
  }
});


const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.root}>
        <Link to ="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>Explore <Box component="span" style={{color:"#ffe500"}}>Plus</Box></Typography>
            <img src={subURL} className={classes.subURL} />
          </Box>
        </Link>
        <SearchBar />
        <SideButtons />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
