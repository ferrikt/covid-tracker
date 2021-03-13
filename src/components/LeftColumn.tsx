import * as React from "react";
import { Container, GlobalCases } from "./Styled";

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
    <GlobalCases>
      <Grid
        // gridArea="left"
        //bg="black"
        // gridTemplateRows="2fr 12fr 1.5fr"
        gap={1}
      >
        <div
        // direction="column"
        // align="center"
        // justify="center"
        // p={2}
        // bg="gray.700"
        >
          <div>{"Left column 3 "}</div>
          <div>{error}</div>

          {a.map((x) => (
            <Box bg="muted">{x}</Box>
          ))}
        </div>
      </Grid>
    </GlobalCases>
  );
};

export default LeftColumn;
