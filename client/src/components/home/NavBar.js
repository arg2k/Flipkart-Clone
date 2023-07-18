import { navData } from "../../constants/data";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { useTheme } from "@emotion/react";

const useStyle = makeStyles(theme=>({
    outside: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    inside: {
        padding: '12px 8px',
        textAlign: 'center'
    },
    imgStyle: {
        width: 64,
        //padding: '12px 10px 1px 10px',
    },
    textStyle: {
        fontSize: 14,
        fontWeight: 550
    }
}))

const NavBar = () => {
    const classes = useStyle();
    const theme = useTheme();
  return (
    <Box className={classes.outside}>
      {navData.map((data) => (
        <Box className={classes.inside}>
          <img src={data.url} className={classes.imgStyle}/>
          <Typography className={classes.textStyle}>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
