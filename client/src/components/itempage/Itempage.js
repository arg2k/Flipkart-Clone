import {
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItemInfo } from "../../redux/actions/itemsActions";
import clsx from "clsx";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Leftitems from "./LeftItems";


const useStyle = makeStyles({
  wrapper: {
    marginTop: 55,
    backgroundColor: "#f2f2f2",
  },
  outside: {
    marginLeft: 295,
    marginRight: 295,
    backgroundColor: "white",
    display: "flex",
  },
  detailsstyling: {
    marginTop: 50,
    "&>*": {
      marginTop: 10,
    },
  },
  pricestyling: {
    fontSize: 30,
  },
  textsizereducer: {
    fontSize: 14,
    "&>*": {
      fontSize: 14,
      marginTop: 10,
    },
    verticalAlign: 'baseline'
  },
  greycolor: {
    color: "#878787",
  },
  icon: {
    fontSize: 1,
    marginRight: 10,
    color: "#00CC00",
    height: 19,
  },
});

const ItemPage = () => {
  const classes = useStyle();
  const iconurl =
    "https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90";
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const { item } = useSelector((state) => state.getItemInfo);
  const date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  //console.log(match.params);
  const { id } = useParams();
  //console.log(id);
  //const variable = "product1";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemInfo(id));
  }, [dispatch,id]);
  return (
    <Box className={classes.wrapper}>
      {item && Object.keys(item).length ? (
        <Box className={classes.outside}>
          <Box style={{ minWidth: "42%" }}><Leftitems item={item}/></Box>
          <Box className={classes.detailsstyling}>
            <Typography style={{fontSize: 18}}>{item.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.textsizereducer, classes.greycolor)}
            >
              10 Ratings & 4 Reviews
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span className={classes.pricestyling}>₹{item.price.cost}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greycolor}>
                <strike>₹{item.price.mrp}</strike>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {item.price.discount} off
              </span>
            </Typography>
            <Typography style={{fontWeight: 600}}>Available offers</Typography>
            <Box className={classes.textsizereducer}>
              <Typography>
                <img src={iconurl} className={classes.icon} />
                Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit
                Card
              </Typography>

              <Typography>
                <img src={iconurl} className={classes.icon} />
                Bank Offer 20% off on 1st txn with Amex Network Cards issued by
                ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik
              </Typography>

              <Typography>
                <img src={iconurl} className={classes.icon} />
                Bank Offer 15% Instant discount on first Pay Later order of ₹500
                and above
              </Typography>

              <Typography>
                <img src={iconurl} className={classes.icon} />
                Special Price Extra ₹5500 off(price inclusive of discount)
              </Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow className={classes.textsizereducer}>
                  <TableCell className={classes.greycolor}>Delivery</TableCell>
                  <TableCell style={{fontWeight: 600}}>{date.toDateString()} | ₹40</TableCell>
                </TableRow>
                <TableRow className={classes.textsizereducer}>
                  <TableCell className={classes.greycolor}>Warranty</TableCell>
                  <TableCell>1 Year Limited Domestic Brand Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.textsizereducer}>
                  <TableCell className={classes.greycolor}>Seller</TableCell>
                  <TableCell className={classes.textsizereducer}>
                    <span style={{color: '#2874f0'}}>TREASURE HAUL ONLINE</span>
                    <Typography>7 Days Replacement Policy</Typography>
                    <Typography>
                      View more sellers starting from ₹{item.price.cost}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <img src={sellerURL} style={{width: 390}}/>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.textsizereducer}>
                  <TableCell className={classes.greycolor}>Description</TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default ItemPage;
