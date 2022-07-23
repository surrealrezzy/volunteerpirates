import React from "react";
import { AppBar, Box, Toolbar, Typography, MenuItem } from "@mui/material";

import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: "#393D47",
        color: "#DBE2E9",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Toolbar>
        <div style={{ flexGrow: 1 }}></div>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography>CC0 Public Domain</Typography>
          <Typography>
            To the extent possible under law, the Tennessee Pirate Party has
            waived all copyright and related or neighboring rights to the
            content of this website
          </Typography>
        </Box>

        <div style={{ flexGrow: 1 }}></div>
        <MenuItem style={{ padding: 4 }}>
          <SocialIcon url="https://twitter.com/jaketrent" />
        </MenuItem>
        <MenuItem style={{ padding: 4 }}>
          <SocialIcon url="https://reddit.com/" />
        </MenuItem>
        <MenuItem style={{ padding: 4 }}>
          <SocialIcon url="https://discord.com/invite/GCYUKvNHMB" />
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
