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

  toggleOpen = open => {
    const { searchItem } = this.props;
    const { results, doSearch } = searchItem;
    // if there currently are no results in the search item and You're toggling it open trigger search
    if (results.length === 0 && !this.state.open) doSearch();

    this.setState({ open: open === undefined ? !this.state.open : open });
  };

  render() {
    const { searchItem } = this.props;
    const { open } = this.state;
    return (
      <Segment>
        <Accordion>
          <Accordion.Title>
            <SearchTitle setOpen={this.toggleOpen} searchItem={searchItem} />
          </Accordion.Title>
          {open && (
            <Accordion.Content active={open}>
              <SearchItemContent searchItem={searchItem} />
            </Accordion.Content>
          )}
        </Accordion>
      </Segment>
    );
  }
}
