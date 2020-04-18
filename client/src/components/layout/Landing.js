import React from "react";
import { Link } from "react-router-dom";
import { Box } from "grommet";
import SpeechManager from "./SpeechManager";

export default function() {
  return (
    <div style={{ height: "75vh" }}>
      <Box align="center" justify="center">
        <h4>
          <b>Uncensorable</b> speech protector built on{" "}
          <span style={{ fontFamily: "monospace" }}>BluzelleDB</span> for Swarm-of-Duty 2020
        </h4>
        <p>
          Scrap the web for sensitive comments, store them securely on Bluzelle and retrieve them for fun.
        </p>
        <br />
      </Box>
      <SpeechManager />
    </div>
  );
}
