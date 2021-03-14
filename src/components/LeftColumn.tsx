//import { jsx } from "theme-ui";

import * as React from "react";

import { useCountryDataCtx } from "../context/DataContext";
import { Grid, Flex, Heading, Text, Box } from "theme-ui";

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

  return (
    <Grid
      sx={{
        gridTemplateRows: "1fr 15fr 2fr",
        gridArea: "left",
        border: "1px solid #363636",
        marginLeft: "10px",
        background: "#222",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Heading>Global cases</Heading>
        <Heading color="red">3000</Heading>
      </Flex>

      <Flex
        sx={{
          overflowY: "scroll",
          flexDirection: "column",
        }}
      >
        <Flex>
          <Text
            sx={{
              fontSize: 1,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Cases by Country/Region/Sovereignty
          </Text>
        </Flex>
        <Flex>
          <ul>
            {a.map((x) => (
              <li>{x}</li>
            ))}
          </ul>
        </Flex>
        <Flex>3</Flex>
      </Flex>
      <Flex>row3</Flex>
    </Grid>
  );
};

export default LeftColumn;
