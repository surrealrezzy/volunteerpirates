import type { NextPage } from "next";
import Page from "../components/Page";
import Divider from "../components/Divider";

import { Typography, Box } from "@mui/material";
import Subscribe from "../components/Subscribe";

const Home: NextPage = () => {
  return (
    <Page>
      <>
        <Typography
          variant="h4"
          style={{ padding: 14, fontFamily: "Monteserrat" }}
        >
          Welcome, Pirates of Tennessee!
        </Typography>
        <Typography
          variant="h6"
          style={{
            padding: 14,
            paddingTop: 28,
            fontFamily: "Monteserrat",
          }}
        >
          The Pirate party is the party of the internet, fighting to support
          both your civil and digital liberties. We stand for copyright and
          patent reform, your privacy online and your right to repair,
          government transparency and direct democracy.
        </Typography>
        <Typography
          variant="h6"
          style={{
            padding: 14,
            fontFamily: "Monteserrat",
          }}
        >
          Wanna join this growing movement? Go ahead and join the{" "}
          <a href="https://discord.com/invite/GCYUKvNHMB">
            US Pirate Party Discord
          </a>{" "}
          and meet us in the #tennessee channel
        </Typography>
        <Divider />
        <Subscribe />
        <Divider />
        <Typography
          variant="h6"
          style={{
            padding: 14,
            fontFamily: "Monteserrat",
          }}
        >
          This is currently a work in progress, if you want to be notified of
          any updates, go ahead and sign up for our mailing list. Don't worry,
          your email will stay secret
        </Typography>
      </>
    </Page>
  );
};

export default Home;
