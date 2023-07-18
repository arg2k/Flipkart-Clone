import Carousel  from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles } from '@material-ui/core';
import { Bolt } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const useStyle = makeStyles(theme => ({
    img: {
        // width: '93.6%',
        // height: 280,
        // paddingLeft: 106,
        // //paddingRight: 104,
        // //overflowX: 'auto',
        // [theme.breakpoints.down('md')]: {
        //     // objectFit: 'cover',
        //     // height: 170,
        //     width: '100%',
        //     paddingLeft: 1,
        //     overflowX: 'auto',
        // }
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    },
    changingmargin: {
        //marginTop: 1
    }
}))

const HomeCarousel = () => {
    const classes = useStyle();
    const theme = useTheme();
    return(
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: '#ffffff',
                    color: '#494949',
                    borderRadius: 0,
                    // marginLeft: 105,
                    // marginRight: 121,
                    marginTop: -32,
                    margin: 0,
                    height: 85,
                    width: 50,
                    // borderRadius: 3,
                    "&:hover": {
                        backgroundColor: 'black',
                        color: 'black'
                      }
                }
            }}
            className={classes.changingmargin}
        >
            {
                bannerData.map( (item) => (
                    <img src={item} className={classes.img}/>
                ) )
            }
        </Carousel>
    )
}

export default HomeCarousel;