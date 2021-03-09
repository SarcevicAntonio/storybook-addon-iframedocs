import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import React from "react";
import { PanelContent } from "./components/PanelContent";
import { PARAM_KEY } from "./constants";

export const Panel = (props) => {
  const paramData = useParameter(PARAM_KEY, []);

  return (
    <AddonPanel {...props}>
      <PanelContent path={paramData} />
    </AddonPanel>
  );
};
