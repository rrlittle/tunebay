import React from "react";
import { Icon, Modal, Image, Header } from "semantic-ui-react";

export const LogPopup = ({ value }) => {
	if (!value)
		value = [
			"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
			"A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.",
			"He's not a war hero. He's a war hero because he was captured. I like people that weren't captured, OK, I hate to tell you.",
			"You know, it really doesn’t matter what the media write as long as you’ve got a young and beautiful piece of ass.",
			"If you can’t get rich dealing with politicians, there’s something wrong with you.",
			"If you can’t get rich dealing with politicians, there’s something wrong with you.",
			"Laziness is a trait in the blacks. ... Black guys counting my money! I hate it."
		];
	return (
		<Modal
			closeIcon
			style={{ margin: "auto", marginTop: "200px" }}
			trigger={<Icon name="file text" />}
		>
			<Modal.Header>Log</Modal.Header>
			<Modal.Content>
				{value.map((entry, i) => <p key={i}>{entry}</p>)}
			</Modal.Content>
		</Modal>
	);
};
