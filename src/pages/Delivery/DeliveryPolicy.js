import React from "react";
import "./DeliveryPolicy.css"; // Import CSS for styling

function DeliveryPolicy() {
  return (
    <div className="shipping-container container">
      <h2 className="shipping">Shipping & delivery Policy</h2>
      <ul className="ulshipping">
        <li>No International shipping is done for any of our customers.</li>
        <li>
          For domestic buyers, orders are shipped through registered domestic
          courier companies and/or speed post only.
        </li>
        <li>Orders are shipped within 1 day.</li>
        <li>
          The delivering of the shipment subject to Courier Company / post
          office norms, Usually 2-5 Working days.
        </li>
        <li>
          JUST SHOPPER is not liable for any delay in delivery by the courier
          company / postal authorities and only guarantees to hand over the
          consignment to the courier company or postal authorities within 0-7
          days from the date of the order and payment or as per the delivery
          date agreed at the time of order confirmation.
        </li>
        <li>
          Delivery of all orders will be to the address provided by the buyer.
        </li>
        <li>
          Delivery of our services will be confirmed on your mail ID as
          specified during registration.
        </li>
        <li>
          For any issues in utilizing our services, you may contact our helpdesk
          on WhatsApp at 9500231901 or email at justshopperofficial@gmail.com.
        </li>
      </ul>
    </div>
  );
}

export default DeliveryPolicy;
