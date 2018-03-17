import React from "react";
import { Dropdown } from "semantic-ui-react";
// import "../css/GlobalHeaderUserDropdown.css";

const options = [{ key: 1, text: "Sign Out", value: null }];

export const GlobalHeaderUserDropdown = ({ name }) => (
  <div>
    <Dropdown pointing text={`Hello, ${name}`} options={options} />
  </div>
);
