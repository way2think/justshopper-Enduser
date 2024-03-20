import React from 'react';
// import { makeStyles } from '@mui/styles';
import { Grid, Card, CardMedia, CardContent, Typography, Button, styled } from '@mui/material';

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
}));

const items = [
  {
    name: 'Choco Biscuit ',
    image: '../images/biscuit.jpg',
    price: '$413.00',
  },
  {
    name: 'Choco Biscuit',
    image: '../images/biscuit.jpg',
    price: '$413.00',
  },
  {
    name: 'Choco Biscuit',
    image: '../images/biscuit.jpg',
    price: '$413.00',
  },
  {
    name: 'Choco Biscuit',
    image: '../images/biscuit.jpg',
    price: '$413.00',
  },
];

const BuyAgain = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                  {item.name}
                </Typography>
               
                <Typography variant="h6" color="#000" component="p">
                  Price: {item.price}
                </Typography>
                <br />
                <Button variant="contained" style={{color:"#fff", backgroundColor:"#dc3237", marginTop:5}}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BuyAgain;
