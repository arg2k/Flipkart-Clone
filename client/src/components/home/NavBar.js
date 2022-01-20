import { navData } from "../../constants/data";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    outside: {
        display: 'flex',
        margin: '55px 370px 10px 330px',
        justifyContent: 'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('xl')]: {
          margin: 0
        }
    },
    inside: {
        textAlign: 'center'
    },
    imgStyle: {
        width: 64,
        padding: '12px 10px 1px 10px',
    },
    textStyle: {
        fontSize: 13,
        fontWeight: 550
    }
}))

const NavBar = () => {
    const classes = useStyle();
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
