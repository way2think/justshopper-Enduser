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
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
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
                <ListItem key={text} disablePadding>
                  {index === 1 || index === 2 ? (
                    <div>
                      <ListItemButton
                        onClick={() => handleMenuItemClick(index)}
                      >
                        <ListItemText primary={text} />
                        <ArrowDropDownIcon />
                      </ListItemButton>

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
                      >
                        <MenuItem onClick={() => handleMenuItemClick(index)}>
                          <Link to="/pen">Pen</Link>
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick(index)}>
                          <Link to="/pencil">Pencil</Link>
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick(index)}>
                          <Link to="/notebook">Notebook</Link>
                        </MenuItem>
                      </div>
                    </div>
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
