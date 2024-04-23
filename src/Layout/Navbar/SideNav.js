import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function SideNav() {
  const [open, setOpen] = React.useState(false);
<<<<<<< HEAD
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
=======
  const [showSubMenu1, setShowSubMenu1] = React.useState(false);
  const [showSubMenu2, setShowSubMenu2] = React.useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
>>>>>>> 45f6d503eafb13c141dd5796619e5be88375a515
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <MenuIcon sx={{ marginRight: "10px" }} onClick={toggleDrawer} />
      <Drawer open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <List>
            {["Home", "Shop by Category", "Shop by Theme", "Contact Us"].map(
              (text, index) => (
<<<<<<< HEAD
                <ListItem key={text} disablePadding>
                  {index === 1 || index === 2 ? (
                    <div>
                      <ListItemButton
                        onClick={() => handleMenuItemClick(index)}
=======
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  {index === 1 ? (
                    <>
                      <ListItemButton
                        onClick={() => {
                          setShowSubMenu1(!showSubMenu1);
                          setShowSubMenu2(false);
                        }}
>>>>>>> 45f6d503eafb13c141dd5796619e5be88375a515
                      >
                        <ListItemText primary={text} />
                        <ArrowDropDownIcon />
                      </ListItemButton>
<<<<<<< HEAD

                      <div
                        className={
                          selectedIndex === index ? "d-block" : "d-none"
                        }
                        // anchorReference="anchorPosition"
                        // anchorPosition={{ top: 0, left: 200 }} // Adjust left position according to your layout
                        // open={selectedIndex === index && open}
                        // onClose={() => handleMenuItemClick(null)}
                        // PaperProps={{
                        //   style: {
                        //     marginTop: "8px",
                        //   },
                        // }}
=======
                      <div
                        className={showSubMenu1 ? "d-block" : "d-none"}
                        // anchorEl={anchorEl1}
                        // open={selectedIndex === index && Boolean(anchorEl1)}
                        // onClose={handleMenuClose}
                        // anchorOrigin={{
                        //   vertical: "bottom",
                        //   horizontal: "left",
                        // }}
                        // transformOrigin={{
                        //   vertical: "top",
                        //   horizontal: "left",
                        // }}
                        // getContentAnchorEl={null}
>>>>>>> 45f6d503eafb13c141dd5796619e5be88375a515
                      >
                        <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu1(false);
                          }}
                        >
                          <Link to="/pen">Pen</Link>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu1(false);
                          }}
                        >
                          <Link to="/pencil">Pencil</Link>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu1(false);
                          }}
                        >
                          <Link to="/notebook">Notebook</Link>
                        </MenuItem>
                      </div>
<<<<<<< HEAD
                    </div>
=======
                    </>
                  ) : index === 2 ? (
                    <>
                      <ListItemButton
                        onClick={() => {
                          setShowSubMenu1(false);
                          setShowSubMenu2(!showSubMenu2);
                        }}
                      >
                        <ListItemText primary={text} />
                        <ArrowDropDownIcon />
                      </ListItemButton>
                      <div
                        className={showSubMenu2 ? "d-block" : "d-none"}
                        // anchorEl={anchorEl2}
                        // open={selectedIndex === index && Boolean(anchorEl2)}
                        // onClose={handleMenuClose}
                        // getContentAnchorEl={null}
                      >
                        <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu2(false);
                          }}
                        >
                          <Link to="/pen">Pen</Link>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu2(false);
                          }}
                        >
                          <Link to="/pencil">Pencil</Link>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu2(false);
                          }}
                        >
                          <Link to="/notebook">Notebook</Link>
                        </MenuItem>
                      </div>
                    </>
>>>>>>> 45f6d503eafb13c141dd5796619e5be88375a515
                  ) : (
                    <Link
                      to={index === 0 ? "/" : "contact-us"}
                      style={{
                        width: "100%",
                      }}
                      className="listitems"
                    >
                      <ListItemButton
                        onClick={() => handleMenuItemClick(index)}
                      >
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </Link>
                  )}
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
