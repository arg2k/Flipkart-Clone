import {
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Grid,
} from "@material-ui/core";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemInfo } from "../../redux/actions/itemsActions";
import clsx from "clsx";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Leftitems from "./LeftItems";
import ItemDetail from "./itemdetail";
import { useTheme } from "@emotion/react";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    marginTop: 55,
    backgroundColor: "#f2f2f2",
  },
  outside: {
    background: "#FFFFFF",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  detailsstyling: {
    marginTop: 50,
    "&>*": {
      marginTop: 10,
    },
  },
  pricestyling: {
    fontSize: 28,
  },
  textsizereducer: {
    fontSize: 14,
  },
  greycolor: {
    color: "#878787",
  },
  // icon: {
  //   fontSize: 15,
  //   marginRight: 10,
  //   color: "#00CC00",
  //   //height: 19,
  // },
}));

const ItemPage = ({ history, match }) => {
  const classes = useStyle();
  const theme = useTheme();
  const iconurl =
    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90";
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const itemDetails = useSelector((state) => state.getItemInfo);
  const { item } = itemDetails;
  const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  //console.log(match.params);
  const { id } = useParams();
  //console.log(id);
  //const variable = "product1";
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getItemInfo(id));
  // }, [dispatch,id]);
  useEffect(() => {
      dispatch(getItemInfo(id));
  }, [dispatch, id]);

  return (
    <Box className={classes.wrapper}>
      <Box></Box>
      {item && Object.keys(item).length && (
        <Grid container className={classes.outside}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Leftitems item={item} />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            className={classes.detailsstyling}
          >
            <Typography>{item.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.greycolor, classes.textsizereducer)}
              style={{ marginTop: 5 }}
            >
              10 Ratings & 4 Reviews
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{item.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greycolor}>
                <strike>₹{item.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {item.price.discount} off
              </span>
            </Typography>
            <ItemDetail item={item} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ItemPage;
