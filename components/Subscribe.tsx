import { Box, TextField, Button } from "@mui/material";

const Subscribe = () => (
  <Box
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 56,
    }}
  >
    <Box style={{ flexDirection: "row" }}>
      <TextField
        placeholder="Enter your email"
        type="email"
        size="small"
        required
      ></TextField>
      <Button
        style={{
          maxWidth: "fit-content",
          background: "#393D47",
          color: "#DBE2E9",
          marginLeft: 7,
        }}
      >
        Join!
      </Button>
    </Box>
  </Box>
);

export default Subscribe;
