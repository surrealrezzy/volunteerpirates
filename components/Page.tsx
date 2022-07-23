import * as React from "react";
import { Paper, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};
const Page = ({ children }: Props) => {
  return (
    <Box
      style={{
        background: "#DBE2E9",
        minHeight: "100vh",
        margin: -10,
      }}
    >
      <Header />
      <Box
        style={{
          padding: "12px",
          margin: 224,
          marginTop: 28,
          marginBottom: 14,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Page;
