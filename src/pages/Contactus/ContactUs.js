import React from "react";
import WorkDetailBlack from "../../component/HomeComponent/WorkDetailBlack";
import ContactDetails from "../../component/contactus/ContactDetails";
import Path from "../../component/Path";

const ContactUs = () => {
  return (
    <div>
      <Path link="/" pathhome="Home" pathdetails="Contact us" />
      <ContactDetails />
      <WorkDetailBlack />
    </div>
  );
};

export default ContactUs;
