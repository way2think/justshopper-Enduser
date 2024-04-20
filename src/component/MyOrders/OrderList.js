import { Box, Button, Grid, Stack } from "@mui/material";
import OrderItem from "./OrderItem";
import { useGetAllOrdersByUserIdQuery } from "../../api/order";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import BackDropWithLoader from "../Loader/BackDropWithLoader";
import { formatAmount, formatDate } from "../../utils";
import axios from "axios";

const today = new Date();
const endOfDay = new Date(today);
const millisecondsPerDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
const thirtyDaysAgo = endOfDay.getTime() - millisecondsPerDay * 30;

const OrderList = () => {
  const user = useSelector(selectUser);
  const [filter, setFilter] = useState("30days");

  const [time, setTime] = useState(thirtyDaysAgo);

  // console.log("use: ", user.id);

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
    { type: "limit", value: 5 },
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
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/payment/generate-invoice`,
      // `http://127.0.0.1:5001/justshopper-dev/us-central1/payment/generate-invoice`,
      { order_id: order.id },
      { responseType: "arraybuffer" }
    );

    if (result.data) {
      const blob = new Blob([result.data], { type: "application/pdf" });
      // console.log("blob: ", blob);
      const fileName = `Order-${order.id}.pdf`;

      blobToSaveAs(fileName, blob);

      // const url = window.URL.createObjectURL(blob);
      // window.open(url);
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

            // console.log("e", e.target.value, value);

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
              style={{ margin: 5 }}
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
                    {/* <span className="cstmrInfo">
                      <strong>Raji</strong>
                    </span> */}
                  </p>
                </div>
                <div className="orderHead col-12 col-md-3 col-lg-3">
                  <div className="invoiceDetails">
                    <p className="orderplaced">
                      ID: {order.id}
                      {/* <span>
                        <a href="#">Order Details</a>
                      </span>{" "} */}
                      <span className="showInvoice">
                        <Button
                          variant="text"
                          onClick={() => downloadInvoice(order)}
                        >
                          Download Invoice
                          {/* <i
                            className="fa fa-chevron-down"
                            aria-hidden="true"
                          ></i> */}
                        </Button>
                      </span>
                    </p>
                    {/* <div className="invioceModel">
                      <ul>
                        <li>
                          <a href="#">Invoice 1</a>
                        </li>
                        <li>
                          <a href="#">Invoice 1</a>
                        </li>
                        <li>
                          <a href="#">Invoice 1</a>
                        </li>
                      </ul>
                      <span className="modelClose">
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </span>
                    </div> */}
                  </div>
                </div>

                <div className="itemDetails">
                  {order.ordered_items.map((item) => (
                    <OrderItem item={item} />
                  ))}

                  <hr />
                  <Stack>
                    <Grid container spacing={2}>
                      <Grid item sm={6} xs={12} md={3} lg={3}>
                        {" "}
                        <Box>
                          <h3 className="Delivery">Status: {order.status}</h3>
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
                            Item(s) Subtotal: &#8377;
                            {formatAmount(order.total_item_price)}
                          </p>
                          <p>
                            Shipping: &#8377;
                            {formatAmount(order.shipping_price)}
                          </p>
                          {/* <p>Total: {formatAmount(order.total_price)}</p> */}
                          <p>
                            Grand Total: &#8377;
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
