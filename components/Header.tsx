import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";

import Link from "next/link";

import Image from "next/image";
import Logo from "../public/logo.svg";

const Header = () => (
  <>
    <Box>
      <AppBar
        position="static"
        style={{ color: "#DBE2E9", background: "#393D47" }}
      >
        <Toolbar style={{ padding: 12 }}>
          <MenuItem>
            <Link href="/">
              <>
                <Image src={Logo} alt="logo" />
                <Typography
                  variant="h6"
                  style={{ marginLeft: 14, fontFamily: "Monteserrat" }}
                >
                  Tennessee Pirate Party
                </Typography>
              </>
            </Link>
          </MenuItem>

          <div style={{ flexGrow: 1 }}></div>
          {/* <Typography variant="h6" style={{ fontFamily: "Monteserrat" }}>
              "No safe harbor for the enemies of liberty"
            </Typography> */}
          <div style={{ flexGrow: 1 }}></div>
          {/* <MenuItem>
              <Typography variant="h6" style={{ fontFamily: "Monteserrat" }}>
                <Link href="/newsletter">Newsletter</Link>
              </Typography>
            </MenuItem> */}
          {/* <MenuItem>
              <Typography variant="h6" style={{ fontFamily: "Monteserrat" }}>
                <Link href="/platform">Platform</Link>
              </Typography>
            </MenuItem> */}
          {/* <MenuItem disabled>
              <Typography variant="h6" style={{ fontFamily: "Monteserrat" }}>
                <Link href="/donate">Donate</Link>
              </Typography>
            </MenuItem> */}
        </Toolbar>
      </AppBar>
    </Box>
  </>
);

export default Header;
