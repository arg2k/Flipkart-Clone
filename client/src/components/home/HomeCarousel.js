import Carousel  from 'react-material-ui-carousel';
import { bannerData } from '../../constants/data';
import { makeStyles } from '@material-ui/core';
import { Bolt } from '@mui/icons-material';

const useStyle = makeStyles(theme => ({
    img: {
        width: '93.6%',
        height: 280,
        paddingLeft: 106,
        //paddingRight: 104,
        //overflowX: 'auto',
        [theme.breakpoints.down('md')]: {
            // objectFit: 'cover',
            // height: 170,
            width: '100%',
            paddingLeft: 1,
            overflowX: 'auto',
        }
    },
    changingmargin: {
        marginTop: 1
    }
}))

const HomeCarousel = () => {
    const classes = useStyle();
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
                    marginLeft: 105,
                    marginRight: 121,
                    marginTop: -32,
                    height: 105,
                    width: 47,
                    borderRadius: 3,
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