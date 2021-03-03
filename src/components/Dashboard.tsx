import * as React from "react";
import { Box, AppBar } from "@material-ui/core";
import Header from "./Header";
import { spacing } from "@material-ui/system";

const Dashboard: React.SFC<{}> = () => (
  <div className="dashboard-page">
    <Header />
  </div>
);

export default Dashboard;
