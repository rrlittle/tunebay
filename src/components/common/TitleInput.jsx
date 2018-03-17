import React from "react";
import "./title.css";

export const TitleInput = ({ value, onKeyPress, onChange, style = {} }) => (
	<input
		style={style}
		className="SearchTitle"
		value={value}
		onKeyPress={onKeyPress}
		onChange={e => onChange(e, { ...e.target })}
	/>
);
