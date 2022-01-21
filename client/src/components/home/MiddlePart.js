import { useTheme } from '@emotion/react';
import { Box, makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';

const imageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MiddlePart = () => {
    const classes = useStyle();
    const theme = useTheme();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} className={classes.image} />
                        </Grid>
                    ))
                }
            </Grid>
            <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} />
        </>
    )
}

export default MiddlePart;