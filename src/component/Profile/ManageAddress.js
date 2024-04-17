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
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
}));

const ManageAddress = () => {
  const user = useSelector(selectUser);

  const classes = useStyles();

  // const handleAddAddress = () => {
  //   setAddresses([
  //     ...addresses,
  //     {
  //       name: "",
  //       street: "",
  //       city: "",
  //       state: "",
  //       zip: "",
  //     },
  //   ]);
  // };

  return (
    <div className={`${classes.root} container`}>
      {/* <AddAddress handleAddAddress={handleAddAddress} /> */}
      <SignupModal manageAddress={true} />
      <Grid container spacing={2}>
        {user.shipping_address.length === 0 ? (
          <Grid item sm={12}>
            <div className="d-flex justify-content-between">No Addresses</div>
          </Grid>
        ) : null}
        {user.shipping_address.map((address, index) => (
          <Grid item sm={12} xs={12} md={6} lg={6} key={index}>
            <Card className={classes.card} style={{ textAlign: "left" }}>
              {/* <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt=""
                /> */}
              <CardContent>
                {/* <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  color="#000"
                >
                  Raji
                </Typography> */}

                <Typography variant="body" color="#000" component="p">
                  {address.line}
                </Typography>
                <Typography variant="body" color="#000" component="p">
                  {address.city + ", " + address.state}
                </Typography>
                <Typography variant="body" color="#000" component="p">
                  {address.country + " - " + address.pincode}
                </Typography>
                {/* <Typography variant="body" color="#000" component="p">
                  7339122971
                </Typography> */}

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
