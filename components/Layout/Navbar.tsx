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
import { services } from "@/Constants";
import { useRouter } from "next/navigation";

const pages = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About Us",
    link: "/",
  },
  {
    id: 3,
    title: "Our Services",
    link: "/",
  },
  {
    id: 4,
    title: "Services Agreement",
    link: "/",
  },
  {
    id: 5,
    title: "Blog",
    link: "/",
  },
];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    console.log("reusable clicked");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.textContent === "Our Services") {
      handleOpenNavMenu(event);
    }
  };
  const handleMouseLeave = () => {
    handleCloseNavMenu();
  };

  const pagesMenu = () => {
    return (
      <div className="flex items-center xl:gap-2">
        {pages.map((page) => (
          <Button
            key={page.id}
            onClick={handleCloseNavMenu}
            aria-describedby="popover-our-services"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            sx={{ my: 2, display: "block" }}
            className="text-black/70 capitalize text-base xl:text-lg font-normal font-inter whitespace-nowrap"
          >
            {page.title !== "Our Services" ? (
              <span onClick={() => router.push(`/`)}>{page.title}</span>
            ) : (
              <Select
                variant="standard"
                id="popover-our-services"
                labelId="our-services-select"
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
                {services.map((service) => (
                  <MenuItem
                    key={service.id}
                    value={service.id}
                    onClick={() => router.push(`/services/electrician`)}
                    className="text-black/70 py-3 uppercase"
                  >
                    {service.title}
                  </MenuItem>
                ))}
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
              <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => router.push(`/`)}>
                  {page.title}
                </Typography>
              </MenuItem>
            ))}
            <div className="border-t border-black/80 mt-4">
              {actionButtons("flex-col mx-2")}
            </div>
          </Menu>
        </Box>
        <AppLogo
          className="flex md:hidden w-[120px] h-[40px]"
          onClick={() => router.push(`/`)}
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
