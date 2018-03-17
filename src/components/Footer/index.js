import React from "react";
import { Container, Segment, Grid } from "semantic-ui-react";

export class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical>
        <Container>
          <Grid stackable inverted divided>
            <Grid.Row columns={4} />
          </Grid>
        </Container>
      </Segment>
    );
  }
}
