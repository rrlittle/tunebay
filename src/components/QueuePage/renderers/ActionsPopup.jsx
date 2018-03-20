import React from "react";
import { Header, Icon, Popup, Radio, Divider } from "semantic-ui-react";

export const ActionsPopup = ({ value }) => (
	<Popup hoverable on="click" trigger={<Icon name="options" />}>
		<Header>ACTIONS</Header>
		<Divider />
		<Radio toggle label="ACTION 1" />
		<Radio toggle label="ACTION 2" />
		<Radio toggle label="ACTION 3" />
	</Popup>
);
