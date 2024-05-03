import React from "react";
import "./CancellationRefundPolicy.css"; // Import CSS for styling

function CancellationRefundPolicy() {
  return (
    <div className="policy-container container">
      <h2 className="headingrefund">Cancellation & Refund Policy</h2>
      <div className="policy-content">
        <p className="justdesc">
          JUST SHOPPER believes in helping its customers as far as possible.
          Under this policy:
        </p>
        <ul className="ulrefund">
          <li>
            No cancellations will be considered if the orders have been
            communicated to the vendors/merchants and they have initiated the
            process of shipping them.
          </li>
          <li>
            JUST SHOPPER does not accept cancellation requests for any products
            listed on the website. However, refund/replacement can be made if
            the customer establishes with a full cover opening video of the
            product without any cuts made in the video.
          </li>
          <li>
            In case of receipt of damaged or defective items, please report the
            same to our Customer Service team on WhatsApp at 9500231901 or email
            at justshopperofficial@gmail.com with a full cover opening video.
            The request will be entertained once the Just Shopper team has
            checked and determined the same at their own end. This should be
            reported within 1 day of delivery of the products.
          </li>
          <li>
            If you feel that the product received is not as shown on the site or
            as per your expectations, you must bring it to the notice of our
            customer service within 1 day of receiving the product. The Customer
            Service Team, after looking into your complaint, will take an
            appropriate decision.
          </li>
          <li>
            No complaints can be made regarding products as none of the product
            comes with a warranty from manufacturers.
          </li>
          <li>
            In case of any refunds approved by the JUST SHOPPER, it’ll take 7-15
            days for the refund to be processed to the end customer.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CancellationRefundPolicy;
