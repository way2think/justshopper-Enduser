import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProfileDetail, { temp } from "../../component/Profile/ProfileDetail";
import ChangePassword from "../../component/Profile/ChangePassword";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "40px" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          //   textColor="secondary"
          //   indicatorColor="secondary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#dc3237",
              color: "#000",
            },
          }}
        >
          <Tab
            label="My Profile"
            {...a11yProps(0)}
            //    sx={{ color: "#fff" ,backgroundColor:"#dc3237","mui-selected":{
            //     color: "#000",backgroundColor:"#dc3237"
            //    } }}
          />
          <Tab
            label="Change Password"
            {...a11yProps(1)}
            // sx={{ color: "#dc3237" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProfileDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ChangePassword />
        {/* {  temp} */}
      </CustomTabPanel>
    </Box>
  );
}
