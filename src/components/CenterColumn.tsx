import * as React from "react";
import { GlobalCases } from "./Styled";
import { Box, Grid, Flex } from "theme-ui";

interface IProps {
  name?: string;
}

const CenterColumn: React.SFC<IProps> = (props: IProps) => (
  <Flex
    sx={{
      gridArea: "center",
      border: "1px solid #363636",
      marginLeft: "10px",
      background: "#222",
    }}
  >
    <div>Center column 9</div>
  </Flex>
);

export default CenterColumn;
