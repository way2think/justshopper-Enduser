import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateShippingAddress } from "../../store/userSlice";
import { useUpdateShippingAddressMutation } from "../../api/user";
import { errorNotification } from "../../utils/notifications";

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
}));

const ManageAddress = ({ openAddressModal, value, setShowModal, add }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [addNewShippingAddress, { isLoading, isSuccess, isError, error }] =
    useUpdateShippingAddressMutation();

  const handleDeleteShippingAddress = async (address) => {
    if (
      window.confirm(`Do you want to delete this address: ${address.name}?`) ===
      true
    ) {
      const updatedShippingAddresses = user.shipping_addresses
        .filter((add) => add.id !== address.id)
        .map((add) => ({ ...add }));
      // console.log("updatedShippingAddres-manage",updateShippingAddress)
      // updatedShippingAddresses[0]?.is_active=true;
      if (updatedShippingAddresses.length > 0) {
        updatedShippingAddresses[0].is_active = true;
      }
      const result = await addNewShippingAddress({
        docId: user.id,
        dataObject: {
          shipping_addresses: updatedShippingAddresses,
        },
      });

      // console.log("result: ", result);
      if (result.data) {
        // udpate the result in local state
        dispatch(updateShippingAddress(updatedShippingAddresses));
      } else {
        errorNotification(result.error.message);
      }
    }
  };

  const handleEditShippingAddress = (address) => {
    // console.log("add: ", address);
    openAddressModal({
      isOpen: true,
      isEdit: true,
      data: address,
    });
  };

  return (
    <div className={`${classes.root} container`}>
      {/* {value === 2 && (
        <Button
          variant="contained"
          onClick={() =>
            setShowModal({
              isOpen: true,
              data: null,
            })
          }
          sx={add}
        >
          Add Address
        </Button>
      )} */}
      <Grid container spacing={2}>
        {user.shipping_addresses?.length === 0 ? (
          <Grid item sm={12}>
            <div className="d-flex justify-content-between">No Addresses</div>
          </Grid>
        ) : (
          user.shipping_addresses?.map((address, index) => (
            <Grid item sm={12} xs={12} md={6} lg={6} key={index}>
              <Card
                className={classes.card}
                style={{
                  textAlign: "left",
                }}
              >
                <CardContent>
                  <Typography variant="body" color="#000" component="p">
                    {address.name + ", " + address.line}
                  </Typography>
                  <Typography variant="body" color="#000" component="p">
                    {address.city + ", " + address.state}
                  </Typography>
                  <Typography variant="body" color="#000" component="p">
                    {address.country + " - " + address.pincode}
                  </Typography>
                  <br />
                  <Button
                    variant="contained"
                    style={{
                      color: "#fff",
                      backgroundColor: "#dc3237",
                      marginTop: 5,
                    }}
                    onClick={() => handleEditShippingAddress(address)}
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
                    onClick={() => handleDeleteShippingAddress(address)}
                  >
                    <DeleteIcon />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ManageAddress;
