import React from "react";
import { Segment, Form, Grid } from "semantic-ui-react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { observer } from "mobx-react";

export const RangeInput = observer(
  ({
    min = 0,
    max = 120,
    highVal = 80,
    lowVal = 30,
    onChange = (low, high) => console.log("change hit", low, high)
  }) => {
    console.log("rendering range with", min, max, highVal, lowVal);
    const trackStyle = {
      position: "absolute",
      width: "0",
      height: "5px",
      borderRadius: "4px",
      left: "0%",
      backgroundColor: "#3498DB"
    };

    const handleStyle = {
      background: "#fff -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.05))",
      borderRadius: "100%",
      transform: "translate(-10%, -10%)",
      width: "20px",
      height: "20px",
      boxShadow:
        "0 1px 2px 0 rgba(34,36,38,.15),0 0 0 1px rgba(34,36,38,.15) inset",
      border: "0px",
      cursor: "pointer",
      backgroundColor: "#3498DB"
    };

    const railStyle = {
      position: "absolute",
      height: "4px",
      borderRadius: "4px",
      backgrounColor: "rgba(0,0,0,.05)"
    };

    return (
      <Segment basic style={{ width: "100%" }}>
        <Form.Field>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={3}>
                <Form.Input
                  value={lowVal}
                  onChange={(e, { value }) => onChange(value, highVal)}
                  fluid
                  size="mini"
                  type="number"
                  style={{
                    minWidth: "50px",
                    paddingLeft: "0px",
                    paddingRight: "0px"
                  }}
                />
              </Grid.Column>
              <Grid.Column width={10}>
                <Range
                  onChange={([low, high]) => onChange(low, high)}
                  min={min}
                  max={max}
                  value={[lowVal, highVal]}
                  handleStyle={[handleStyle, handleStyle]}
                  trackStyle={[trackStyle]}
                  railStyle={railStyle}
                  allowCross={false}
                />
              </Grid.Column>
              <Grid.Column width={3} floated="right">
                <Form.Input
                  fluid
                  value={highVal}
                  onChange={(e, { value }) => onChange(lowVal, highVal)}
                  size="mini"
                  type="number"
                  style={{
                    minWidth: "50px",
                    paddingLeft: "0px",
                    paddingRight: "0px"
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
      </Segment>
    );
  }
);
