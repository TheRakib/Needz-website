"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppLogo from "../Shared/AppLogo";

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
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pagesMenu = () => {
    return (
      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: "block" }}
            className="text-black/70 capitalize text-lg font-normal"
          >
            {page}
          </Button>
        ))}
      </div>
    );
  };

  const actionButtons = (className: string) => {
    return (
      <Box
        sx={{ flexGrow: 0 }}
        className={`${className && className} gap-2 flex`}
      >
        <Button className="bg-primary text-white capitalize">
          Become a partner
        </Button>
        <Button className="bg-secondary text-white capitalize">
          Call Us: 08-235520
        </Button>
      </Box>
    );
  };

  return (
    <AppBar
      position="static"
      className="max-w-layout mx-auto bg-white text-black shadow-none mt-6"
    >
      <Container>
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
              {actionButtons("flex-col mx-2")}
            </Menu>
          </Box>
          <AppLogo className="flex md:hidden w-[120px] h-[40px]" />
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="justify-center"
          >
            {pagesMenu()}
          </Box>

          <div className="hidden md:block">{actionButtons("")}</div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
