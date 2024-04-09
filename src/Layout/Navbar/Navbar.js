import React, { useEffect, useMemo, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./Navbar.css";
// import Search from "./Search";
import { Stack } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LoginModal from "../../component/Login/LoginModal";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/userSlice";
import { useSignOutUserMutation } from "../../api/auth";
import { selectCategory, selectTheme } from "../../api/api";
import SignupModal from "../../component/Signup/SignupModal";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openBasic, setOpenBasic] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [open, setOpen] = useState({
    login: false,
    signup: false,
  });

  const isAuthenticated = useSelector(selectIsAuthenticated);
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

  const [signOutUser, { isError, error, data, isLoading }] =
    useSignOutUserMutation();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        setMobileNav(true);
      } else {
        setMobileNav(false);
      }
    }

    // Set initial mobileNav state on page load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log("mobile", mobileNav);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img src="../images/JS logo png.png" className="logo" alt="" />
        </MDBNavbarBrand>
        <Stack direction="row">
          {mobileNav && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ listStyleType: "none" }}
              className="mobileviewcart"
            >
              {/* <MDBNavbarItem className="me-3 me-lg-0">
                <MDBNavbarLink href="#">
                  <Search />
                </MDBNavbarLink>
              </MDBNavbarItem> */}

              <MDBNavbarItem className="me-2 me-lg-0">
                <MDBNavbarLink href="cart">
                  <img
                    src="../images/Shopping Bag.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="me-2 me-lg-0">
                <MDBNavbarLink href="/favorites">
                  <img
                    src="../images/heart.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <img
                      src="../images/male User.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href="profile">
                      Profile
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="orders">
                      Orders
                    </MDBDropdownItem>
                    <MDBDropdownItem link>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem className="me-2 me-lg-0">
                <MDBNavbarLink href="#">
                  <LoginModal />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </Stack>
          )}
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
        </Stack>

        <MDBCollapse navbar open={openBasic} style={{ textAlign: "left" }}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-end">
            <MDBNavbarItem className="navitem">
              <Link
                active
                aria-current="page"
                to="/"
                style={{
                  color: location.pathname.match(/^\/$/) ? "#dc3237" : "#000",
                }}
              >
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="navitem">
              <MDBDropdown>
                <MDBDropdownToggle
                  style={{
                    color: location.pathname.includes("/shop-by-category")
                      ? "#dc3237"
                      : "#000",
                  }}
                  tag="a"
                  className="nav-link"
                  role="button"
                >
                  Shop by Category
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {categoryList?.map((item) =>
                    item?.show_in_top_navbar ? (
                      <Link
                        key={item?.name}
                        to={`/shop-by-category?category=${item?.name}`}
                        // onClick={() =>
                        //   navigate("/shop-by-category", {
                        //     state: item,
                        //   })
                        // }
                      >
                        <MDBDropdownItem className="MDBDropdownItem" link>
                          {item?.name}
                        </MDBDropdownItem>
                      </Link>
                    ) : null
                  )}
                  {/* <Link to="shop-by-category">
                    <MDBDropdownItem className="MDBDropdownItem" link>
                      Pen
                    </MDBDropdownItem>
                  </Link>
                  <Link to="shop-by-category">
                    <MDBDropdownItem className="MDBDropdownItem" link>
                      Notes
                    </MDBDropdownItem>
                  </Link> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem className="navitem">
              <MDBDropdown>
                <MDBDropdownToggle
                  style={{
                    color: location.pathname.includes("/shop-by-theme")
                      ? "#dc3237"
                      : "#000",
                  }}
                  tag="a"
                  className="nav-link"
                  role="button"
                >
                  Shop by Theme
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {themeList?.map((item) =>
                    item?.show_in_top_navbar ? (
                      <Link
                        key={item?.name}
                        to={`/shop-by-theme?theme=${item?.name}`}
                        // onClick={() =>
                        //   navigate("/shop-by-category", {
                        //     state: item,
                        //   })
                        // }
                      >
                        <MDBDropdownItem className="MDBDropdownItem" link>
                          {item?.name}
                        </MDBDropdownItem>
                      </Link>
                    ) : null
                  )}
                  {/* <Link to="shop-by-category">
                    <MDBDropdownItem className="MDBDropdownItem" link>
                      Stationery
                    </MDBDropdownItem>
                  </Link>
                  <Link to="shop-by-category">
                    <MDBDropdownItem className="MDBDropdownItem" link>
                      Pen
                    </MDBDropdownItem>
                  </Link>
                  <Link to="shop-by-category">
                    <MDBDropdownItem className="MDBDropdownItem" link>
                      Notes
                    </MDBDropdownItem>
                  </Link> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="navitem">
              <Link
                to="contact-us"
                style={{
                  color: location.pathname.includes("/contact-us")
                    ? "#dc3237"
                    : "#000",
                }}
              >
                Contact Us
              </Link>
            </MDBNavbarItem>

            {!mobileNav && (
              <>
                <MDBNavbarItem className="me-3 me-lg-0">
                  <MDBNavbarLink href="#">
                    {/* <MDBIcon fas icon="search" /> */}
                    {/* <img src="../images/Search.png" alt="" width={25} height={25}  /> */}
                    {/* <Search /> */}
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem className="me-3 me-lg-0">
                  <MDBNavbarLink href="cart">
                    {/* <MDBIcon fas icon="shopping-cart" /> */}
                    <img
                      src="../images/Shopping Bag.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem className="me-3 me-lg-0">
                  <MDBNavbarLink href="/favorites">
                    <img
                      src="../images/heart.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem className="me-3 me-lg-0">
              <MDBNavbarLink href="#">
                <img
                  src="../images/male User.png"
                  alt=""
                  width={25}
                  height={25}
                />
              </MDBNavbarLink>
            </MDBNavbarItem> */}
                {isAuthenticated ? (
                  <MDBNavbarItem>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        tag="a"
                        className="nav-link"
                        role="button"
                      >
                        <img
                          src="../images/male User.png"
                          alt=""
                          width={25}
                          height={25}
                        />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem
                          className="MDBDropdownItem"
                          link
                          href="profile"
                        >
                          Profile
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          className="MDBDropdownItem"
                          link
                          href="orders"
                        >
                          Orders
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          className="MDBDropdownItem"
                          onClick={() => signOutUser()}
                        >
                          Logout
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavbarItem>
                ) : (
                  <MDBNavbarItem className="me-3 me-lg-0">
                    <MDBNavbarLink href="#">
                      <LoginModal
                        open={open.login}
                        setOpen={(isOpen, type) =>
                          setOpen((prevState) => {
                            if (type === "login") {
                              return {
                                signup: false,
                                login: isOpen,
                              };
                            } else {
                              return {
                                signup: isOpen,
                                login: false,
                              };
                            }
                          })
                        }
                      />

                      <SignupModal
                        open={open.signup}
                        setOpen={(isOpen, type) =>
                          setOpen((prevState) => ({
                            ...prevState,
                            signup: isOpen,
                          }))
                        }
                      />
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                )}
              </>
            )}
          </MDBNavbarNav>

          {/* <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
