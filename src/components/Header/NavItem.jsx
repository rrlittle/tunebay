import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const NavItem = ({ to, type, text, options }) => {
  const style = { fontSize: 14 };
  let nav = {};
  if (to) nav = { as: NavLink, to: to, exact: true };

  return type === "dropdown" ? (
    <Dropdown style={style} item pointing text={text}>
      <Dropdown.Menu>
        {options.map((option, i) => {
          let nav = { as: NavLink, to: option.to };
          return (
            <Dropdown.Item {...nav} key={i}>
              {option.text}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <Menu.Item style={style} {...nav}>
      {text}
    </Menu.Item>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};
