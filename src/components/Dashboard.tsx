import React from "react";
import CenterColumn from "./CenterColumn";
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import { Grid, Box } from "theme-ui";

import { useCountryDataCtx } from "../context/DataContext";

const Dashboard: React.SFC<{}> = () => {
  const { error } = useCountryDataCtx();

  return (
    <Grid
      gap={0}
      sx={{
        gridTemplateAreas: `"header header header" "left center right"`,
        gridTemplateColumns: "3fr 9fr 5fr",
        gridTemplateRows: "9vh 90vh",
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
