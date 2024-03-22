import { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddAddress from "./AddAddress";
import SignupModal from "../Signup/SignupModal";

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
    name: "Choco Biscuit ",
    image: "../images/biscuit.jpg",
    price: "$413.00",
  },
  {
    name: "Choco Biscuit",
    image: "../images/biscuit.jpg",
    price: "$413.00",
  },
  {
    name: "Choco Biscuit",
    image: "../images/biscuit.jpg",
    price: "$413.00",
  },
  {
    name: "Choco Biscuit",
    image: "../images/biscuit.jpg",
    price: "$413.00",
  },
  {
    name: "Choco Biscuit",
    image: "../images/biscuit.jpg",
    price: "$413.00",
  },
  // {
  //   name: "Choco Biscuit",
  //   image: "../images/biscuit.jpg",
  //   price: "$413.00",
  // },
];
const ManageAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      name: "John Doe",
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    {
      name: "Jane Doe",
      street: "456 Elm Street",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  ]);

  const classes = useStyles();

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
      },
    ]);
  };

  return (
    <div className={`${classes.root} container`}>
    {/* <AddAddress handleAddAddress={handleAddAddress} /> */}
    <SignupModal manageAddress={true} />
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item sm={12} xs={12} md={6} lg={6} key={index}>
            <Card className={classes.card} style={{textAlign:"left"}}>
              {/* <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt=""
                /> */}
              <CardContent >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="#000"
                 
                >
                  Raji
                </Typography>

                <Typography variant="body" color="#000" component="p">
                  104/21 Test Address, Katpadi,
                </Typography>
                <Typography variant="body" color="#000" component="p">
                  Vellore - 632004
                </Typography>
                <Typography variant="body" color="#000" component="p">
                  7339122971
                </Typography>

                <br />
                <Button
                  variant="contained"
                  style={{
                    color: "#fff",
                    backgroundColor: "#dc3237",
                    marginTop: 5,
                  }}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant="contained"
                  style={{
                    color: "#fff",
                    backgroundColor: "#000",
                    marginTop: 5,
                    marginLeft: 4,
                  }}
                >
                  <DeleteIcon />
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageAddress;
