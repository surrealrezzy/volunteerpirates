import React from "react";
import { AppBar, Box, Toolbar, Typography, MenuItem } from "@mui/material";

import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <AppBar
      position="relative"
      style={{
        background: "#393D47",
        color: "#DBE2E9",
        bottom: 0,
      }}
    >
      <Toolbar>
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
            content of this website. The source can be found{" "}
            <a
              href="https://github.com/surrealrezzy/volunteerpirates"
              style={{ color: "#DBE2E9" }}
            >
              here
            </a>
          </Typography>
        </Box>
        <div style={{ flexGrow: 1 }}></div>
        <MenuItem style={{ padding: 4 }}>
          <SocialIcon url="https://twitter.com/PiratesOfTN" />
        </MenuItem>
        <MenuItem style={{ padding: 4 }}>
          <SocialIcon url="https://www.reddit.com/r/PiratePartyTN/" />
        </MenuItem>
        <MenuItem style={{ padding: 4 }}>
          <SocialIcon url="https://discord.com/invite/GCYUKvNHMB" />
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
