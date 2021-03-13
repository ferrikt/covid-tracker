import * as React from "react";
import { Flex } from "theme-ui";

interface IProps {
  name?: string;
}

const RightColumn: React.SFC<IProps> = (props: IProps) => (
  <Flex
    sx={{
      gridArea: "right",
      border: "1px solid #363636",
      marginLeft: "10px",
      background: "#222",
    }}
  >
    <div>Right column 5</div>
  </Flex>
);

export default RightColumn;
