import * as React from 'react';
import { Grid, Flex } from 'theme-ui';
import News from './News';
import Map from './Map';

interface IProps {}

const CenterColumn: React.SFC<IProps> = (props: IProps) => (
    <Grid
        sx={{
            gridArea: 'center',
            border: '1px solid #363636',
            marginLeft: '10px',
            background: '#222',
            gridTemplateRows: 'auto 250px'
        }}
    >
        <Flex sx={{ flexDirection: 'column' }}>
            <Map />
        </Flex>
        <News />
    </Grid>
);

export default CenterColumn;
