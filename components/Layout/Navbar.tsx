"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AppLogo from "../Shared/AppLogo";
import { twMerge } from "tailwind-merge";
import { BiPhoneCall } from "react-icons/bi";
import { Select } from "@mui/material";

const pages = [
  "Home",
  "About Us",
  "Our Services",
  "Services Agreement",
  "Blog",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    console.log("reusable clicked");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pagesMenu = () => {
    return (
      <div className="flex items-center xl:gap-2">
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: "block" }}
            className="text-black/70 capitalize text-base xl:text-lg font-normal font-inter whitespace-nowrap"
          >
            {page !== "Our Services" ? (
              page
            ) : (
              <Select
                variant="standard"
                labelId="our-services-select"
                id="our-services-select"
                value=""
                disableUnderline
                displayEmpty
                onChange={handleCloseNavMenu}
                className="text-black/70 text-base"
                sx={{
                  minWidth: "120px",
                }}
              >
                <MenuItem value="" disabled>
                  Our Services
                </MenuItem>
                <MenuItem value="service1">Service 1</MenuItem>
                <MenuItem value="service2">Service 2</MenuItem>
                {/* Add more services as MenuItem */}
              </Select>
            )}
          </Button>
        ))}
      </div>
    );
  };

  const actionButtons = (className: string) => {
    return (
      <Box
        sx={{ flexGrow: 0 }}
        className={twMerge(`${className && className} xl:gap-2 flex`)}
      >
        <Button className=" text-black capitalize text-base xl:text-[17px] font-inter whitespace-nowrap ">
          Become a partner
        </Button>
        <Button className=" text-black capitalize text-base xl:text-[17px] font-inter whitespace-nowrap ">
          <BiPhoneCall className="mr-2 text-2xl" />
          08-235520
        </Button>
      </Box>
    );
  };

  return (
    <AppBar
      position="static"
      className="max-w-layout px-6 xl:px-0 mx-auto bg-white text-black shadow-none mt-6 font-inter"
    >
      <Toolbar disableGutters>
        <AppLogo className="hidden md:block" />

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            className="md:ml-auto"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            <div className="border-t border-black/80 mt-4">
              {actionButtons("flex-col mx-2")}
            </div>
          </Menu>
        </Box>
        <AppLogo
          className="flex md:hidden w-[120px] h-[40px]"
          // onClick={handleOpenNavMenu}
        />
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          className="justify-center"
        >
          {pagesMenu()}
        </Box>

        <div className="hidden lg:block">{actionButtons("")}</div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
