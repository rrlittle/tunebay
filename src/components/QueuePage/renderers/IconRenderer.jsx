import React from "react";
import { Icon, Popup } from "semantic-ui-react";
export const IconRenderer = ({ value, node }) => {
	if (!value) return null;
	const { id } = node.data;
	const iconMapping = {
		pending: {
			color: "grey",
			name: "wait"
		}
	};
	const opt = {
		content: value,
		...(iconMapping[value] || {
			content: `Bad Record. ${id}: raw(${value})`,
			name: "x",
			color: "red"
		})
	};
	return (
		<Popup hoverable trigger={<Icon {...opt} />}>
			{opt.content}
		</Popup>
	);
};
