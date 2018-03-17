import React from "react";
import { Segment, Accordion } from "semantic-ui-react";
import { SearchItemContent } from "./SearchItemContent";
import { SearchTitle } from "./SearchTitle";

export class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    let { defaultOpen = false } = props;
    this.state = { open: defaultOpen };
  }

  setOpen = open =>
    this.setState({ open: open === undefined ? !this.state.open : open });

  render() {
    const { searchItem } = this.props;
    const { open } = this.state;
    return (
      <Segment>
        <Accordion>
          <Accordion.Title>
            <SearchTitle setOpen={this.setOpen} searchItem={searchItem} />
          </Accordion.Title>
          <Accordion.Content active={open}>
            <SearchItemContent searchItem={searchItem} />
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}
