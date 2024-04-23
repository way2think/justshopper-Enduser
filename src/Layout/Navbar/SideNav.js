import React, { useMemo } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import "./SideNav.css";
import { useSelector } from "react-redux";
import { selectCategory, selectTheme } from "../../api/api";

export default function SideNav() {
  const [open, setOpen] = React.useState(false);
  const [showSubMenu1, setShowSubMenu1] = React.useState(false);
  const [showSubMenu2, setShowSubMenu2] = React.useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const navigate = useNavigate();

  const categoryListDetail = useSelector(selectCategory);
  const themeListDetail = useSelector(selectTheme);

  const categoryList = useMemo(() => {
    return categoryListDetail?.filter((cat) => cat.show_in_top_navbar === true);
  }, [categoryListDetail]);

  const themeList = useMemo(() => {
    return themeListDetail?.filter(
      (theme) => theme.show_in_top_navbar === true
    );
  }, [themeListDetail]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <MenuIcon
        className="Sidenav"
        sx={{ marginRight: "10px" }}
        onClick={toggleDrawer}
      />
      <Drawer open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <List>
            {["Home", "Shop by Category", "Shop by Theme", "Contact Us"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  {index === 1 ? (
                    <>
                      <ListItemButton
                        onClick={() => {
                          setShowSubMenu1(!showSubMenu1);
                          setShowSubMenu2(false);
                        }}
                      >
                        <ListItemText primary={text} />
                        <ArrowDropDownIcon />
                      </ListItemButton>
                      <div className={showSubMenu1 ? "d-block" : "d-none"}>
                        {/* <MenuItem
                          onClick={() => {
                            handleMenuItemClick(index);
                            setShowSubMenu1(false);
                          }}
                        >
                          <Link to="/pen">Pen</Link>
                        </MenuItem> */}
                        {categoryList?.map((item) =>
                          item?.show_in_top_navbar ? (
                            <MenuItem
                              key={item?.name}
                              onClick={() => {
                                handleMenuItemClick(index);
                                setShowSubMenu1(false);
                                navigate(
                                  `/shop-by-category?category=${item?.name}`
                                );
                                toggleDrawer();
                              }}
                            >
                              <Link key={item?.name}>{item?.name}</Link>
                            </MenuItem>
                          ) : null
                        )}
                      </div>
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
                        {themeList?.map((item) =>
                          item?.show_in_top_navbar ? (
                            <MenuItem
                              key={item?.name}
                              to={`/shop-by-theme?theme=${item?.name}`}
                              onClick={() => {
                                handleMenuItemClick(index);
                                setShowSubMenu2(false);
                                navigate(`/shop-by-theme?theme=${item?.name}`);
                                toggleDrawer();
                              }}
                            >
                              <Link>{item?.name}</Link>
                            </MenuItem>
                          ) : null
                        )}
                        {/* <MenuItem
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
                        </MenuItem> */}
                      </div>
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
