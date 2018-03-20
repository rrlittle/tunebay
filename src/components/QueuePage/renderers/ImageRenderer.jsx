import React from "react";
import { Image, Popup } from "semantic-ui-react";

export const ImageRenderer = ({ value }) => {
	if (!value) return null;

	return (
		<Popup hoverable trigger={<Image width="100%" height="100%" src={value} />}>
			<Image width="200" height="200" src={value} alt={value} />
		</Popup>
	);
};
