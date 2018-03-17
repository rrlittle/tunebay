import React from "react";
import { Segment, Button, Grid } from "semantic-ui-react";
import { TitleInput } from "../common";

const minLength = 3;

export class SearchAdd extends React.Component {
	state = { query: "" };

	addSearch = () => {
		const { query } = this.state;
		const { addSearch } = this.props;
		if (query.length > minLength) {
			addSearch(query);
			this.setState({ query: "" });
		}
	};
	render() {
		const { query } = this.state;
		return (
			<Segment>
				<Grid stackable>
					<Grid.Row style={{ padding: 0 }}>
						<Grid.Column width={14} verticalAlign="middle">
							<TitleInput
								value={query}
								onKeyPress={e => e.key === "Enter" && this.addSearch()}
								onChange={(e, { value }) => this.setState({ query: value })}
							/>
						</Grid.Column>
						<Grid.Column
							style={{ padding: 0 }}
							verticalAlign="middle"
							floated="right"
							width={2}
						>
							<Button
								disabled={query.length < minLength}
								fluid
								icon="plus"
								primary
								onClick={this.addSearch}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}
