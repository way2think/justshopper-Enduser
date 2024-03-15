import React from "react";
import "./CartTable.css";
import { Button } from "@mui/material";

const CartTable = () => {
  return (
    <div class="container mt-5">
      <table class="table table-xs">
        <tr className="tableheadrow">
          <th></th>
          <th className="text-left tableheaditem">Product Name</th>
          <th className="text-right tableheaditem">Quantity </th>
          <th className="text-right tableheaditem">Price</th>
          <th className="text-right tableheaditem">Total Price</th>
        </tr>
        <tr className="item-row">
          <td>
            {" "}
            <img src="../images/chocolate.jpg" alt="" className="imagecion" />
          </td>
          <td className="Items">
            <p className="itemname">
              {" "}
              <strong>Choco Bar</strong>
            </p>
            <p className="itemdesc">STATIONERY - Notes</p>
          </td>
          <td className="text-right" title="Amount">
            <p className="">- 1 +</p>
          </td>
          <td className="text-right" title="Price">
            2.00
          </td>
          <td className="text-right" title="Total">
            6.00
          </td>
        </tr>
        <tr className="item-row item-row-last">
          <td>
            {" "}
            <img src="../images/chocolate.jpg" alt="" className="imagecion" />
          </td>
          <td className="Items">
            <p className="itemname">
              {" "}
              <strong>Choco Bar</strong>
            </p>
            <p className="itemdesc">STATIONERY - Notes</p>
          </td>
          <td className="text-right" title="Amount">
            3
          </td>
          <td className="text-right" title="Price">
            4.00
          </td>
          <td className="text-right" title="Total">
            12.00
          </td>
        </tr>
        <tr className="total-row info">
          <td className="text-right" colspan="4">
            Sub Total
          </td>
          <td className="text-right">18.00</td>
        </tr>
        <tr className="total-row info">
          <td className="text-right" colspan="4">
            Total
          </td>
          <td className="text-right">18.00</td>
        </tr>
      </table>
    </div>
  );
};

export default CartTable;
