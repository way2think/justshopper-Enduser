import React, { useEffect, useState } from "react";
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
import Search from "./Search";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import LoginModal from "../../component/Login/LoginModal";

export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // useEffect(()=>{
  //   if(window.innerWidth <= 600){
  //     setMobileNav(true)
  //   }
  //   else{
  //     setMobileNav(false)
  //   }
  // },[window.innerWidth])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 992) {
        setMobileNav(true);
      } else {
        setMobileNav(false);
      }
    });
  }, []);

  console.log("mobile", mobileNav);

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
              <MDBNavbarItem className="me-3 me-lg-0">
                <MDBNavbarLink href="#">
                  <Search />
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="me-3 me-lg-0">
                <MDBNavbarLink href="cart">
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
              <MDBNavbarItem className="me-3 me-lg-0 mobileLogin"></MDBNavbarItem>
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

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 justify-content-end">
            <MDBNavbarItem className="navitem">
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="navitem">
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Shop by Category
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <Link to="shop-by-category">
                    <MDBDropdownItem link>Stationery</MDBDropdownItem>
                  </Link>
                  <Link to="shop-by-category">
                    <MDBDropdownItem link>Pen</MDBDropdownItem>
                  </Link>
                  <Link to="shop-by-category">
                    <MDBDropdownItem link>Notes</MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="navitem">
              <MDBNavbarLink
                href="contact-us"
                tabIndex={-1}
                aria-disabled="true"
              >
                Contact Us
              </MDBNavbarLink>
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
                    {/* <MDBIcon fas icon="shopping-cart" /> */}
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
                      <MDBDropdownItem link href="profile">
                        Profile
                      </MDBDropdownItem>
                      <MDBDropdownItem link href="orders">Orders</MDBDropdownItem>
                      <MDBDropdownItem link>Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>

                <MDBNavbarItem className="me-3 me-lg-0">
                  <MDBNavbarLink href="#">
                    <LoginModal />
                  </MDBNavbarLink>
                </MDBNavbarItem>
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
