import * as React from "react";
import { Container, GlobalCases } from "./Styled";

import { useCountryDataCtx } from "../context/DataContext";
import { Box, Grid } from "theme-ui";

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
      <div>{"Left column 3 "}</div>
      <div>{error}</div>

      <Grid gap={2} columns={[1, "1fr"]}>
        {a.map((x) => (
          <Box bg="muted">{x}</Box>
        ))}
      </Grid>

      <ul></ul>
    </GlobalCases>
  );
};

export default LeftColumn;
