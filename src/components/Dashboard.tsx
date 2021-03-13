import React from "react";
import CenterColumn from "./CenterColumn";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { Grid, Box } from "theme-ui";

import { MarginContainer } from "./Styled";
import { useCountryDataCtx } from "../context/DataContext";

const Dashboard: React.SFC<{}> = () => {
  const { error } = useCountryDataCtx();

  return (
    <Grid
      gap={0}
      columns={[3, "3fr 9fr 5fr"]}
      sx={{
        gridTemplateAreas: "header left center right",
      }}
    >
      <Header />

      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </Grid>
  );
};
export default Dashboard;
