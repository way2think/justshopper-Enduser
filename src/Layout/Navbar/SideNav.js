import * as React from "react";
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
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setAnchorEl1(null);
    setAnchorEl2(null);
  };

  const handleMenuOpen1 = (event, index) => {
    setAnchorEl1(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuOpen2 = (event, index) => {
    setAnchorEl2(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setSelectedIndex(null);
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
                  {index === 1 ? (
                    <>
                      <ListItemButton
                        onClick={(event) => handleMenuOpen1(event, index)}
                      >
                        <ListItemText primary={text} />
                        <ArrowDropDownIcon />
                      </ListItemButton>
                      <Menu
                        anchorEl={anchorEl1}
                        open={selectedIndex === index && Boolean(anchorEl1)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        getContentAnchorEl={null}
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
                      </Menu>
                    </>
                  ) : index === 2 ? (
                    <>
                      <ListItemButton
                        onClick={(event) => handleMenuOpen2(event, index)}
                      >
                        <ListItemText primary={text} />
                        <ArrowDropDownIcon />
                      </ListItemButton>
                      <Menu
                        anchorEl={anchorEl2}
                        open={selectedIndex === index && Boolean(anchorEl2)}
                        onClose={handleMenuClose}
                        getContentAnchorEl={null}
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
                      </Menu>
                    </>
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
