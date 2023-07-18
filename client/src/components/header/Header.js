import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import SearchBar from "./SearchBar";
import SideButtons from "./SideButtons";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
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
    // marginTop: "0.05%",
    // marginLeft: "19.5%",
    // marginBottom: "0.5%",
    // //margin: "1%",
    // textDecoration: "none",
    // color: "white",
    // lineHeight: 0,
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  sideButtons: {
    margin: "0 5% 0 auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
  },
  root: {
    minHeight: 55,
  },
}));

const Header = () => {
  const classes = useStyle();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const list = () => (
    <Box className={classes.list} onClick={handleOpen}>
      <List>
        <listItem>
          <SideButtons />
        </listItem>
      </List>
    </Box>
  );
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.root}>
        <IconButton
          color="inherit"
          className={classes.menuButton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Link to="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} className={classes.subURL} />
          </Box>
        </Link>
        <SearchBar />
        <span className={classes.sideButtons}>
          <SideButtons />
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
