import React from "react";

export const PanelContent = ({ path }) => (
  <iframe
    src={path}
    style={{ border: 0, height: "calc(100% - 3px)", width: "100%" }}
  ></iframe>
);
