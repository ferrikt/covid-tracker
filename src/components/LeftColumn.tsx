//import { jsx } from "theme-ui";

import * as React from "react";

import { useCountryDataCtx } from "../context/DataContext";
import { Grid, Flex, Heading, Text, Box } from "theme-ui";
import { List, ListItem } from "./Styled";
interface IProps {
  name?: string;
}

const LeftColumn: React.SFC<IProps> = (props: IProps) => {
  const { loading, error, data, lastUpdate } = useCountryDataCtx();

  let dataArray: Array<{ country: string; value: number }> = [];

  const logMapElements = (value: string, key: string) => {
    dataArray.push({
      country: key,
      value: Number(value),
    });
  };

  data && data.forEach(logMapElements);

  let sortedData: Array<{ country: string; value: number }> = dataArray.sort(
    (a, b) => b.value - a.value
  );

  return (
    <Grid
      sx={{
        gridTemplateRows: "1fr 15fr 2fr",
        gridArea: "left",
        marginLeft: "10px",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#222",
          border: "1px solid #363636",
          padding: "10px 0 10px 0",
        }}
      >
        <Heading>Global cases</Heading>
        <Heading color="#e60000">119,471,573</Heading>
      </Flex>

      <Flex
        sx={{
          overflowY: "scroll",
          flexDirection: "column",
          background: "#222",
          border: "1px solid #363636",
        }}
      >
        <Flex>
          <List>
            {sortedData.map((x) => (
              <ListItem>
                <Text>
                  <span style={{ color: "#e60000" }}>
                    {x.value.toLocaleString()}{" "}
                  </span>
                  {x.country}
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>
      </Flex>
      <Flex
        sx={{
          background: "#222",
          border: "1px solid #363636",
          flexDirection: "column",
          paddingLeft: "10px",
          paddingTop: "10px",
        }}
      >
        <>
          <Text color="gray.400">Last Updated at</Text>
          <Text
            sx={{
              color: "gray.400",
              fontSize: "2xl",
              fontWeight: 500,
              paddingTop: "10px",
            }}
          >
            {lastUpdate}
          </Text>
        </>
      </Flex>
    </Grid>
  );
};

export default LeftColumn;
