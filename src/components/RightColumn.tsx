import * as React from 'react';
import { Grid } from 'theme-ui';

import CasesList from './CasesList';
interface IProps {
    name?: string;
}

const RightColumn: React.SFC<IProps> = (props: IProps) => {
    return (
        <Grid
            sx={{
                gridArea: 'right',
                border: '1px solid',
                borderColor: 'gray.700',
                marginLeft: '10px',
                marginRight: '10px',
                background: 'gray.600',
                gap: 1,
                gridTemplate: `"Left Right" 6fr
                "Left Right" 6fr`
            }}
        >
            <Grid sx={{ gridArea: 'Left', bg: 'black', gridTemplateRows: 'auto auto' }}>
                <CasesList tag="new" />
            </Grid>

            <Grid sx={{ gridArea: 'Right', bg: 'black', gridTemplateRows: 'auto' }}>
                <CasesList tag="recovered" />
            </Grid>
        </Grid>
    );
};

export default RightColumn;
