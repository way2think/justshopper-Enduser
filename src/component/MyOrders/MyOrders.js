import React, { useState } from "react";
import "./MyOrders.css";
import { Box, Divider, Grid, Stack } from "@mui/material";
import BuyAgain from "./BuyAgain";
import OrderList from "./OrderList";

const MyOrders = () => {
  const [currentTab, setCurrentTab] = useState("order_tab");
  const [currentTabContent, setCurrentTabContent] = useState("order_tab");

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    setCurrentTabContent(tabId);
  };

  return (
    <>
      <Box textAlign="left" className="overallorderpage container">
        <div className="container-fluid bgBox">
          <div className="customer_details orderList">
            <div className="orderTop">
              <h2 className="hidden-xs">My Orders</h2>
              <div className="search-container">
                <form action="/action_page.php">
                  <input
                    type="text"
                    placeholder="Search all orders"
                    name="search"
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="order_tab">
              <ul className="tabs">
                <li
                  className={`tab-link ${
                    currentTab === "order_tab" && "current"
                  }`}
                  onClick={() => handleTabClick("order_tab")}
                  data-tab="order_tab"
                >
                  Orders
                </li>
                <li
                  className={`tab-link ${
                    currentTab === "buy_again" && "current"
                  }`}
                  onClick={() => handleTabClick("buy_again")}
                  data-tab="buy_again"
                >
                  Buy Again
                </li>
                {/* <li
                  className={`tab-link ${
                    currentTab === "open_orders" && "current"
                  }`}
                  onClick={() => handleTabClick("open_orders")}
                  data-tab="open_orders"
                >
                  Open Orders
                </li> */}
                {/* <li
                  className={`tab-link ${
                    currentTab === "cancelled_orders" && "current"
                  }`}
                  onClick={() => handleTabClick("cancelled_orders")}
                  data-tab="cancelled_orders"
                >
                  Cancelled Orders
                </li> */}
              </ul>
              <div className="orderFilter">
                <label>
                  <span style={{ fontWeight: "bold" }}> 1 order </span> placed
                  in &nbsp;
                </label>
                <select>
                  <option value="">Last 30 Days</option>
                  <option value="">Past 6 Month</option>
                  <option value="">2019</option>
                  <option value="">2018</option>
                </select>
              </div>
            </div>
            {/* orders */}
            {currentTabContent == "order_tab" && (
              <>
                <div className="overallorderdetails">
                  <div
                    id="order_tab"
                    className="orderCardWrap  current "
                    style={{ margin: 5 }}
                  >
                    <div className="orderCard row">
                      <div className="orderHead col-6 col-md-3 col-lg-3">
                        <p className="orderplaced">
                          ORDER PLACED <span>20 March 2024</span>
                        </p>
                      </div>
                      <div className="orderHead col-6 col-md-3 col-lg-3">
                        <p className="orderplaced">
                          TOTAL <span>&#8377;413.00</span>
                        </p>
                      </div>
                      <div className="orderHead col-12 col-md-3 col-lg-3">
                        <p className="orderplaced">
                          SHIP TO <span className="customerName">Raji</span>
                          <span className="cstmrInfo">
                            <strong>Raji</strong>
                          </span>
                        </p>
                      </div>
                      <div className="orderHead col-12 col-md-3 col-lg-3">
                        <div className="invoiceDetails">
                          <p className="orderplaced">
                            ORDER # 171-8448362-6456308{" "}
                            {/* <span>
                            <a href="#">Order Details</a>
                          </span>{" "} */}
                            <span className="showInvoice">
                              <a href="javascript:void(0)">
                                Invoice{" "}
                                <i
                                  className="fa fa-chevron-down"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </span>
                          </p>
                          <div className="invioceModel">
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
                          </div>
                        </div>
                      </div>

                      <div className="itemDetails">
                        <OrderList />
                        <hr />
                        <Stack>
                          <Grid container spacing={2}>
                            <Grid item sm={6} xs={12} md={3} lg={3}>
                              {" "}
                              <Box>
                                <h3 className="Delivery">
                                  Delivered 16-Mar-2019
                                </h3>
                                <p className="customer">
                                  Package was handed to a receptionist
                                </p>
                                <p className="signed">Signed by: Priti.</p>
                              </Box>
                            </Grid>
                            <Grid item sm={6} xs={12} md={3} lg={3}>
                              <Box>
                                <h3 className="Delivery">Shipping Address</h3>
                                <p>
                                  no 103 krs nagar 4th street valimalai road
                                  katpadi
                                </p>
                              </Box>
                            </Grid>
                            <Grid item sm={6} xs={12} md={3} lg={3}>
                              <Box>
                                <h3 className="Delivery">Payment Method</h3>
                                <p>Cash On delivery</p>
                              </Box>
                            </Grid>
                            <Grid item sm={6} xs={12} md={3} lg={3}>
                              <Box>
                                <h3 className="Delivery">Order Summary</h3>
                                <p>Item(s) Subtotal: 708.00</p>
                                <p>Shipping: 40.00</p>
                                <p>Total: 748.00</p>
                                <p>Grand Total: 708.00</p>
                              </Box>
                            </Grid>
                          </Grid>
                        </Stack>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* buy again */}
            {currentTabContent == "buy_again" && (
              <>
                <BuyAgain />
                {/* <div id="buy_again" className="orderCardWrap">
                <div className="again">
                  <h2>Frequently repurchased </h2>
                  <ul>
                    <li>
                      <img src="../images/biscuit.jpg" alt="" />
                      <h4>
                        Pigeon Stainless Steel Swig Water Bottle 750ml (Set of
                        2)
                      </h4>
                      <span>$413.00</span>
                      <button className="buy_again">Add to Cart</button>
                    </li>
                    <li>
                      <img src="../images/biscuit.jpg" alt="" />
                      <h4 style={{textAlign:"left"}}>
                        Pigeon Stainless Steel Swig Water Bottle 750ml (Set of
                        2)
                      </h4>
                      <span>$413.00</span>
                      <button className="buy_again">Add to Cart</button>
                    </li>
                    <li>
                      <img src="../images/biscuit.jpg" alt="" />
                      <h4>
                        Pigeon Stainless Steel Swig Water Bottle 750ml (Set of
                        2)
                      </h4>
                      <span>$413.00</span>
                      <button className="buy_again">Add to Cart</button>
                    </li>
                    <li>
                      <img src="../images/biscuit.jpg" alt="" />
                      <h4>
                        Pigeon Stainless Steel Swig Water Bottle 750ml (Set of
                        2)
                      </h4>
                      <span>$413.00</span>
                      <button className="buy_again">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div> */}
              </>
            )}
            {/* open orders */}
            {/* {currentTabContent == "open_orders" && (
              <div id="open_orders" className="orderCardWrap">
                Lorem1
              </div>
            )} */}
            {/* cancel order */}
            {currentTabContent === "cancelled_orders" && (
              <>
                <OrderList />
                {/* <div id="cancelled_orders" className="orderCardWrap ">
                <div className="orderCard">
                  <div className="orderHead">
                    <ul className="orderLeft">
                      <li>
                        <p>
                          ORDER PLACED <span>12 March 2019</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          TOTAL <span>$413.00</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          SHIP TO{" "}
                          <span className="customerName">Customer Name</span>
                          <span className="cstmrInfo">
                            <strong>Customer Name</strong> Lorem Ipsum is simply
                            dummy text
                          </span>
                        </p>
                      </li>
                    </ul>
                    <div className="invoiceDetails">
                      <p>ORDER # 171-8448362-6456308</p>
                    </div>
                  </div>
                  <div className="itemDetails">
                    <h3>Delivered 16-Mar-2019</h3>
                    <p>Package was handed to a receptionist</p>
                    <p>Signed by: Priti.</p>
                    <div className="itemInfo">
                      <div className="itemImg">
                        <img src="images/product1.jpg" alt="" />
                      </div>
                      <div className="itemDesc">
                        <h4>
                          Pigeon Stainless Steel Swig Water Bottle 750ml (Set of
                          2)
                        </h4>
                        <p>
                          Sold by: <span>E-Emporium</span>
                        </p>
                        <span className="itemPrice">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              </>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default MyOrders;
