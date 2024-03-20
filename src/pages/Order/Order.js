import React, { useState } from "react";

import MyOrders from "../../component/MyOrders/MyOrders";
import { Stack } from "@mui/material";

// function InvoiceModel() {
//   const [showInvoiceModel, setShowInvoiceModel] = useState(false);

//   const handleShowInvoiceClick = () => {
//     setShowInvoiceModel(true);
//   };

//   const handleModelCloseClick = () => {
//     setShowInvoiceModel(false);
//   };

//   return (
//     <div
//       classNameNameName="invoiceModel"
//       style={{ display: showInvoiceModel ? "block" : "none" }}
//     >
//       <ul>
//         <li>
//           <a href="#">Invoice 1</a>
//         </li>
//         <li>
//           <a href="#">Invoice 2</a>
//         </li>
//         <li>
//           <a href="#">Invoice 3</a>
//         </li>
//       </ul>
//       <span classNameNameName="modelClose" onClick={handleModelCloseClick}>
//         <i classNameNameName="fa fa-times" aria-hidden="true"></i>
//       </span>
//     </div>
//   );
// }

const Order = () => {
  const [currentTab, setCurrentTab] = useState("order_tab");

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
  };

  return (
    <>
      {/* <MyOrders /> */}
      <Stack>
        <MyOrders />
      </Stack>
    </>
  );
};

export default Order;
