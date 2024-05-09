import { Box, Button, Divider, Grid, Stack } from "@mui/material";
import OrderItem from "./OrderItem";
import { useGetAllOrdersByUserIdQuery } from "../../api/order";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import BackDropWithLoader from "../Loader/BackDropWithLoader";
import { formatAmount, formatDate } from "../../utils";
import axios from "axios";
import { setIsLoading } from "../../store/appSlice";
import { errorNotification } from "../../utils/notifications";
import "./MyOrders.css";

const today = new Date();
const endOfDay = new Date(today);
const millisecondsPerDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
const thirtyDaysAgo = endOfDay.getTime() - millisecondsPerDay * 30;

const rupeeSymbol = {
  fontFamily: "sans-serif",
  display: "inline",
  color: "#5b5d5d !important",
};

const OrderList = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [filter, setFilter] = useState("30days");

  const [time, setTime] = useState(thirtyDaysAgo);

  const conditions = [
    {
      type: "where",
      field: "user_details.user_id",
      operator: "==",
      value: user.id,
    },
    {
      type: "where",
      field: "payment_status",
      operator: "==",
      value: "success",
    },
    {
      type: "where",
      field: "order_booked_timestamp",
      operator: ">",
      value: time,
    },
    { type: "orderBy", field: "order_booked_timestamp", order: "desc" },
    // { type: "limit", value: 5 },
  ];
  const {
    data: orders,
    isFetching,
    isLoading,
    isError,
  } = useGetAllOrdersByUserIdQuery({ conditions });

  // console.log("orders", orders, isFetching, isLoading);

  const durationHandler = (duration) => {
    const today = new Date();
    const endOfDay = new Date(today); // Create a copy of today's date
    endOfDay.setHours(23, 59, 59, 999); // Set the time to end of the day (23:59:59.999)
    const millisecondsPerDay = 1000 * 60 * 60 * 24; // Milliseconds in a day

    if (duration.unit === "days") {
      setTime(endOfDay.getTime() - millisecondsPerDay * duration.value);
    } else if (duration.unit === "months") {
      // Assuming 30 days in a month (average) for simplicity
      setTime(endOfDay.getTime() - millisecondsPerDay * duration.value * 30);
    } else if (duration.unit === "years") {
      setTime(endOfDay.getTime() - millisecondsPerDay * 365 * duration.value); // Assuming non-leap year
    } else {
      throw new Error(
        "Unsupported duration unit. Please use 'days', 'months', or 'years'."
      );
    }
  };

  useEffect(() => {
    if (filter === "30days") {
      durationHandler({ name: "30days", unit: "days", value: 30 });
    } else if (filter === "6months") {
      durationHandler({ name: "6months", unit: "months", value: 6 });
    } else if (filter === "1year") {
      durationHandler({ name: "1year", unit: "years", value: 1 });
    }
  }, [filter]);

  const downloadInvoice = async (order) => {
    dispatch(setIsLoading(true));
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
        responseType: "arraybuffer",
      };
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/payment/generate-invoice`,
        { order_id: order.id },
        options
      );

      // console.log("downloadInvoice: ", result.status, result.data);
      // dispatch(setIsLoading(false));

      if (result.status === 200) {
        const blob = new Blob([result.data], { type: "application/pdf" });
        // console.log("blob: ", blob);
        const fileName = `Order-${order.id}.pdf`;

        blobToSaveAs(fileName, blob);

        dispatch(setIsLoading(false));

        // const url = window.URL.createObjectURL(blob);
        // window.open(url);
      } else {
        dispatch(setIsLoading(false));
        console.log("downloadInvoice: ", result.data);
        errorNotification(`Failed to download invoice`);
      }
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log("downloadInvoice: ", error.response);

      if (error.config.responseType === "arraybuffer") {
        // If it's a CORS error, convert the ArrayBuffer to a string
        const decoder = new TextDecoder("utf-8");
        const errorMessage = decoder.decode(
          new Uint8Array(error.response.data)
        );
        console.error("CORS error:", errorMessage);
      } else {
        // If it's not a CORS error, handle it normally
        console.error("Error:", error);
      }

      errorNotification(`Failed to download invoice`);
    }
  };

  const blobToSaveAs = (fileName, blob) => {
    try {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      if (link.download !== undefined) {
        // feature detection
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error("BlobToSaveAs error", e);
    }
  };

  return (
    <>
      <div className="orderFilter">
        <label>
          <span style={{ fontWeight: "bold" }}> Orders </span> placed in &nbsp;
        </label>
        <select
          value={filter}
          onChange={(e) => {
            const { value } = e.target;
            setFilter(value);
          }}
        >
          <option value={"30days"}>Last 30 Days</option>
          <option value={"6months"}>Last 6 Months</option>
          <option value={"1year"}>Last 1 year</option>
        </select>
      </div>
      {isFetching || isLoading ? (
        <BackDropWithLoader />
      ) : orders && orders.length <= 0 ? (
        <p>No Orders!!! Order something!!!</p>
      ) : (
        orders.map((order) => (
          <div className="overallorderdetails" key={order.id}>
            <div
              id="order_tab"
              className="orderCardWrap current"
              style={{ margin: 15 }}
            >
              <div className="orderCard row">
                <div className="orderHead col-6 col-md-3 col-lg-3">
                  <p className="orderplaced">
                    ORDER PLACED{" "}
                    <span>{formatDate(order.order_booked_timestamp)}</span>
                  </p>
                </div>
                <div className="orderHead col-6 col-md-3 col-lg-3">
                  <p className="orderplaced">
                    TOTAL <span>&#8377;{formatAmount(order.total_price)}</span>
                  </p>
                </div>
                <div className="orderHead col-12 col-md-3 col-lg-3">
                  <p className="orderplaced">
                    SHIP TO{" "}
                    <span className="customerName">
                      {order.user_details.name}
                    </span>
                  </p>
                </div>
                <div className="orderHead col-12 col-md-3 col-lg-3">
                  <div className="invoiceDetails">
                    <p className="orderplaced">
                      ID: {order.id}
                      <span className="showInvoice">
                        <Button
                          variant="text"
                          onClick={() => downloadInvoice(order)}
                          sx={{ color: "#dc3227" }}
                        >
                          Download Invoice
                        </Button>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="itemDetails">
                  <Stack sx={{ overflowY: "scroll", maxHeight: "400px" }}>
                    {order.ordered_items.map((item) => (
                      <OrderItem
                        rupeeSymbol={rupeeSymbol}
                        key={item.id}
                        item={item}
                        order={order}
                        userDetail={order?.user_details}
                      />
                    ))}
                  </Stack>

                  {/* <hr /> */}
                  <Stack>
                    <Grid container spacing={2}>
                      <Grid item sm={6} xs={12} md={3} lg={3}>
                        {" "}
                        <Box>
                          <h3 className="Delivery">
                            Status:&nbsp;
                            <p
                              style={{
                                borderRadius: "4px",
                                color:
                                  order.status === "booked"
                                    ? "#dcdc27"
                                    : order.status === "dispatched" &&
                                      "#2bb22b",

                                display: "inline",
                                fontWeight: "bold",
                              }}
                            >
                              {order.status[0].toUpperCase() +
                                order.status.slice(1)}
                            </p>
                          </h3>
                          <h3 className="Delivery">
                            Payment Status:{" "}
                            {order.payment_status === "success"
                              ? "Paid"
                              : "Not Paid"}
                          </h3>
                          {order.status === "dispatched" && (
                            <h3 className="Delivery">
                              Dispatched:{" "}
                              {formatDate(order.order_dispatched_timestamp)}
                            </h3>
                          )}

                          {/* <p className="customer">
                            Package was handed to a receptionist
                          </p>
                          <p className="signed">Signed by: Priti.</p> */}
                        </Box>
                      </Grid>
                      <Grid item sm={6} xs={12} md={3} lg={3}>
                        <Box>
                          <h3 className="Delivery">Shipping Address</h3>
                          <p>{order.user_details.shipping_address}</p>
                        </Box>
                      </Grid>
                      <Grid item sm={6} xs={12} md={3} lg={3}>
                        <Box>
                          <h3 className="Delivery">Payment Method</h3>
                          <p>
                            {order.payment_details.payment_method.toUpperCase()}
                          </p>
                        </Box>
                      </Grid>
                      <Grid item sm={6} xs={12} md={3} lg={3}>
                        <Box>
                          <h3 className="Delivery">Order Summary</h3>
                          <p>
                            Item(s) Subtotal:
                            <span style={rupeeSymbol}>&#8377;</span>
                            {formatAmount(order.total_item_price)}
                          </p>
                          <p>
                            Shipping: <span style={rupeeSymbol}>&#8377;</span>
                            {formatAmount(order.shipping_price)}
                          </p>
                          {/* <p>Total: {formatAmount(order.total_price)}</p> */}
                          <p>
                            Grand Total:{" "}
                            <span style={rupeeSymbol}>&#8377;</span>
                            {formatAmount(order.total_price)}
                          </p>
                          {/* <p>Grand Total: 708.00</p> */}
                        </Box>
                      </Grid>
                    </Grid>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default OrderList;
