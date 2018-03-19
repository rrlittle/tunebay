import React from "react";
import {
  Container,
  Segment,
  Grid,
  Image,
  Header as SemHeader,
  Menu
} from "semantic-ui-react";
import PropTypes from "prop-types";
import { GlobalHeaderUserDropdown } from "./GlobalHeaderUserDropdown";
import { NavItem } from "./NavItem";

export const Header = ({ title, headers, imageUrl }) => (
  <Segment>
    <Container>
      <Grid>
        <Grid.Row
          style={{ paddingBottom: "0px", borderBottom: "1px solid #ccc" }}
        >
          <Grid.Column
            floated="left"
            verticalAlign="middle"
            width={2}
            className="img-wrapper"
            style={{ padding: 0 }}
          >
            <Image alt="logo" src={imageUrl} size="small" />
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={10}>
            <SemHeader as="h4" floated="left">
              {title}
            </SemHeader>
          </Grid.Column>
          <Grid.Column floated="right" verticalAlign={"middle"} width={4}>
            <GlobalHeaderUserDropdown />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ padding: 0 }}>
          <Menu stackable size="small" widths="8" text style={{ marginTop: 0 }}>
            {headers.map((header, i) => <NavItem {...header} key={i} />)}
          </Menu>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

Header.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      type: PropTypes.string,
      text: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          to: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string
};
