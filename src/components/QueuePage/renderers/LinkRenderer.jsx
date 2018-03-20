import React from "react";
import { Link } from "react-router-dom";

export const LinkRenderer = ({ value }) => {
	if (!value) return null;
	let { to, name } = value;
	if (!name) name = to;
	return <a href={to}>{name}</a>;
};
