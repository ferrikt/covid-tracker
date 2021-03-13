//import { jsx } from "theme-ui";

import * as React from "react";

import { useCountryDataCtx } from "../context/DataContext";
import { Box, Grid, Flex } from "theme-ui";

interface IProps {
  name?: string;
}

const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const { loading, error, data } = useCountryDataCtx();

  let a: string[] = []; //let fruits: Array<string>

  const logMapElements = (value: string, key: string) => {
    a.push(`${key} = ${value}`);
  };

  data && data.forEach(logMapElements);
  debugger;
  return (
    <Grid
      sx={{
        gridTemplateRows: "1fr 5fr 2fr",
        gridArea: "left",
        border: "1px solid #363636",
        marginLeft: "10px",
        background: "#222",
      }}
    >
      <Flex>{"Left column 3 "}</Flex>
      <Flex>{error}</Flex>
      <Flex>row3</Flex>

      {/* {a.map((x) => (
          <Box bg="muted">{x}</Box>
        ))} */}
    </Grid>
  );
};

export default LeftColumn;
