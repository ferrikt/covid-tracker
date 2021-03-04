import React from "react";
import CenterColumn from "./CenterColumn";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { Grid, Box } from "theme-ui";

import { MarginContainer } from "./Styled";

const Dashboard: React.SFC<{}> = () => (
  <Grid gap={0} columns={[3, "3fr 9fr 5fr"]}>
    <Header />

    <LeftColumn />
    <CenterColumn />
    <RightColumn />
  </Grid>
);

export default Dashboard;
