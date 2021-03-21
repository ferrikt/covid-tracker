import React from 'react';
import CenterColumn from './CenterColumn';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { Grid } from 'theme-ui';

const Dashboard: React.SFC<{}> = () => {
    return (
        <Grid
            gap={0}
            sx={{
                gridTemplateAreas: `"header header header" "left center right"`,
                gridTemplateColumns: '3fr 9fr 5fr',
                gridTemplateRows: '9vh 90vh'
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
