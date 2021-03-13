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
        gridTemplateRows: "1fr 2fr 1fr",
        // gridArea: "left",
        border: "1px solid #363636",
        marginLeft: "10px",
        background: "#222",
      }}
    >
      <div>
        <div>{"Left column 3 "}</div>
        <div>{error}</div>
        <div>row3</div>

        {/* {a.map((x) => (
          <Box bg="muted">{x}</Box>
        ))} */}
      </div>
    </Grid>
  );
};

export default LeftColumn;
