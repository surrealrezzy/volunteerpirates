import { useState, useRef } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Subscribe = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  const [email, setEmail] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);

      return;
    }

    setEmail("");
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 56,
      }}
    >
      <Box
        component="form"
        onSubmit={subscribe}
        noValidate
        sx={{ mt: 1 }}
        style={{ flexDirection: "row" }}
      >
        <TextField
          placeholder="Enter your email"
          type="email"
          size="small"
          required
          ref={inputEl}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></TextField>
        <Button
          type="submit"
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
};

export default Subscribe;
