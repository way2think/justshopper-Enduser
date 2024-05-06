import React, { useState } from "react";
import "./MyOrders.css";
import { Box } from "@mui/material";
import BuyAgain from "./BuyAgain";
import OrderProductList from "./OrderItem";
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
              {/* <div className="search-container">
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
              </div> */}
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
                {/* <li
                  className={`tab-link ${
                    currentTab === "buy_again" && "current"
                  }`}
                  onClick={() => handleTabClick("buy_again")}
                  data-tab="buy_again"
                >
                  Buy Again
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
              {/* my orders - buy again */}
            </div>
            {/* orders */}
            {currentTabContent === "order_tab" && <OrderList />}
            {/* buy again */}
            {currentTabContent === "buy_again" && (
              <>
                <BuyAgain />
              </>
            )}
            {/* cancel order */}
            {currentTabContent === "cancelled_orders" && (
              <>
                <OrderProductList />
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
